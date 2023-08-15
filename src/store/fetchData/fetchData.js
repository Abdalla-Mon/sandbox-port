import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  dataArr: [],
};

// export const fetchData = createAsyncThunk("data/fetchData", () => {
//   return axios.get(data).then((res) => res.data);
// });

const userSlice = createSlice({
  name: "data",
  initialState,
  // extraReducers: (builder) => {
  //   builder.addCase(fetchData.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchData.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.error = "";
  //     state.dataArr = action.payload;
  //   });
  //   builder.addCase(fetchData.rejected, (state, action) => {
  //     state.loading = false;
  //     state.dataArr = "";
  //     state.error = action.error.message;
  //   });
  // },
});
export default userSlice.reducer;
// export const { filterByCat, sliceData, filterByPrice, sort, handleCart } =
//   userSlice.actions;
