import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

//we can give multiple  reducers here so that store have access of all the reducers
const store = configureStore({
	reducer: authReducer,
});

export default store;