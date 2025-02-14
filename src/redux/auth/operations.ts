import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginCredentials,
  AuthResponse,
  AuthCredentials,
  User,
} from "../reduxTypes/interfacesAuth";
import { RootState } from "../store";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post<AuthResponse>("/users/signup", credentials);
    setAuthHeader(res.data.token);
    toast.success("Success! Let's try you personal phonebook.");
    return res.data;
  } catch (e: any) {
    toast.error("Invalid credentials. Please, try again!");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logIn = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post<AuthResponse>("/users/login", credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get<User>("/users/current");
    return res.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
