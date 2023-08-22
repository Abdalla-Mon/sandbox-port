import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  error: "",
  catArr: [],
};

export const fetchCat = createAsyncThunk("cat/fetchCat", (f) => {
  return f.then((product) => product);
});

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCat.fulfilled, (state, action) => {
      state.catArr = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchCat.rejected, (state, action) => {
      state.catArr = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default catSlice.reducer;
