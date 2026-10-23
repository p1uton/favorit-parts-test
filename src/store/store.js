import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import { favoritPartsApi } from "../api/favoritPartsApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [favoritPartsApi.reducerPath]: favoritPartsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritPartsApi.middleware),
});
