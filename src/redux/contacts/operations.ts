import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, AddContactRequest } from "../reduxTypes/interfaceContact";

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<Contact[]>("/contacts");
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  AddContactRequest,
  { rejectValue: string }
>("contacts/addContact", async ({ name, number }, thunkAPI) => {
  try {
    const response = await axios.post<Contact>("/contacts", { name, number });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (e: any) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const updateContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>("contacts/updateContact", async ({ id, name, number }, thunkAPI) => {
  try {
    const response = await axios.patch<Contact>(`/contacts/${id}`, {
      name,
      number,
    });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
