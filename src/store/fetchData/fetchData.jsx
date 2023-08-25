import Commerce from "@chec/commerce.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: true,
  error: "",
  mainArr: [],
  subArr: [],
};
let commerce = new Commerce(
  "pk_530786a34e7e798d4b20af99a738eb2203258ab32055c",
  true
);

export const fetchData = createAsyncThunk("data/fetchData", (f) => {
  return commerce.products.list().then((product) => product);
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.mainArr.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.mainArr = action.payload;
      state.subArr = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.mainArr = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { filterData } = dataSlice.actions;
export default dataSlice.reducer;
