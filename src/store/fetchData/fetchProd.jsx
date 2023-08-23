import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  error: "",
  mainObj: {},
};

export const fetchProd = createAsyncThunk("prod/fetchProd", (f) => {
  return f.then((e) => e);
});

const prodSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    filterProd: (state, action) => {
      state.mainArr.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProd.fulfilled, (state, action) => {
      // state.mainArr.length = 9;
      state.mainObj = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchProd.rejected, (state, action) => {
      state.mainObj = {};
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { filterProd } = prodSlice.actions;
export default prodSlice.reducer;
