import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partNumber: "",
  brand: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPartNumber: (state, action) => {
      state.partNumber = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
  },
});

export const { setPartNumber, setBrand } = searchSlice.actions;

export default searchSlice.reducer;
