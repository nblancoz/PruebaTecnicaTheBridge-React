import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
};

export const getAll = createAsyncThunk("products/getAll", async () => {
  try {
    return await productsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    });
  },
});

export default productsSlice.reducer;
