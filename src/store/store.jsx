import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./fetchData/fetchData";
import prodSlice from "./fetchData/fetchProd";
const store = configureStore({
  reducer: { data: dataSlice, prod: prodSlice },
});
export default store;
