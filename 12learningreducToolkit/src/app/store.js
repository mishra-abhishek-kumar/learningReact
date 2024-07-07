import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//we can give multiple  reducers here so that store have access of all the reducers
export const store = configureStore({
	reducer: todoReducer,
});
