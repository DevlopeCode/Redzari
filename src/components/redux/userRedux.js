import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		isFetching: false,
		isError: false,
		isAdmin: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.user = action.payload.user;
			state.isAdmin = action.payload.isAdmin;
			state.isError = false;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.isError = true;
		},
		signupStart: (state) => {
			state.isFetching = true;
		},
		signupSuccess: (state, action) => {
			state.isFetching = false;
			state.user = action.payload.user;
			state.isError = false;
		},
		signupFailure: (state) => {
			state.isFetching = false;
			state.isError = true;
		},
		logout: (state) => {
			state.user = null;
		},

	},
});

export const { loginStart, loginSuccess, loginFailure, logout ,signupStart,signupFailure,signupSuccess} =
	userSlice.actions;
export default userSlice.reducer;
