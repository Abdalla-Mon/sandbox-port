import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./fetchData/fetchData";
import catSlice from "./fetchData/fetchCat";
import prodSlice from "./fetchData/fetchProd";
const store = configureStore({
  reducer: { data: dataSlice, cat: catSlice, prod: prodSlice },
});
export default store;
