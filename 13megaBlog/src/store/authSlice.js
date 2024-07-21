import { createSlice } from "@reduxjs/toolkit";

//creating Initial State: This we provide in our slice as the initial state
/*Since it is a authSlice, we want to track the user is logged in or Notification,
So initially we are giving it as false as the user is not logged in*/
const initialState = {
	status: false,
	userData: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.userData = action.payload.userData;
		},
		logout: (state, action) => {
			state.status = false;
			state.userData = null;
		},
	},
});

//exporting individuals reducers(functionality) to directly access further in components
export const { login, logout } = authSlice.actions;

//exporting all reducers of slice to give the store access of all the reducers
export default authSlice.reducer;
