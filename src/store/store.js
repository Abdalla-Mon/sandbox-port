import { configureStore } from "@reduxjs/toolkit";

import fetchData from "./fetchData/fetchData";

const store = configureStore({
  reducer: {
    data: fetchData,
  },
});

export default store;
