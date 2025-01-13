import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from "redux-persist";

// const authTransform = createTransform(
//   (inboundState) => {
//     console.log("Before saving token:", inboundState.token);
//     if (inboundState.token) {
//       return {
//         ...inboundState,
//         token: inboundState.token.replace(/^"|"$/g, ""),
//       };
//     }
//     return inboundState;
//   },
//   (outboundState) => {
//     console.log("After loading token:", outboundState.token);
//     if (outboundState.token) {
//       return {
//         ...outboundState,
//         token: outboundState.token.replace(/^"|"$/g, ""),
//       };
//     }
//     return outboundState;
//   },
//   { whitelist: ["auth"] }
// );

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
//   transforms: [authTransform],
// };

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
