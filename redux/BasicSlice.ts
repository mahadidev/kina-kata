import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	navigationHeight: number;
	breadcrumbHeight: number;
	footerHeight: number;
	cartSidebar: boolean;
}

const initialState: CounterState = {
	navigationHeight: 0,
	breadcrumbHeight: 0,
	footerHeight: 0,
	cartSidebar: false,
};

export const BasicSlice = createSlice({
	name: 'basic',
	initialState,
	reducers: {
		setNavigationHeight: (state, action) => {
			state.navigationHeight = action.payload;
		},
		setBreadcrumbHeight: (state, action) => {
			state.breadcrumbHeight = action.payload;
		},
		setFooterHeight: (state, action) => {
			state.footerHeight = action.payload;
		},
		setCartSidebar: (state, action) => {
			state.cartSidebar = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setNavigationHeight,
	setBreadcrumbHeight,
	setFooterHeight,
	setCartSidebar,
} = BasicSlice.actions;

export default BasicSlice.reducer;
