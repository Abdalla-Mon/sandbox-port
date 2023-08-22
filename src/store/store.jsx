import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./fetchData/fetchData";
import catSlice from "./fetchData/fetchCat";

const store = configureStore({
  reducer: { data: dataSlice, cat: catSlice },
});
export default store;
