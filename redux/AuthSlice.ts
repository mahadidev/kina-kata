import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	user: any;
}

const initialState: CounterState = {
	user: null,
};

export const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLogin: (state, action: any) => {
			state.user = {
				_id: action.payload._id,
				name: action.payload.name,
				email: action.payload.email,
				image: action.payload.image,
			};
		},
	},
});

export default AuthSlice.reducer;
export const { authLogin } = AuthSlice.actions;
