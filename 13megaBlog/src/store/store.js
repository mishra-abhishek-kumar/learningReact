import { configureStore } from "@reduxjs/toolkit";

//we can give multiple  reducers here so that store have access of all the reducers
export const store = configureStore({
    reducer: {}
})