import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  cartItem: any;
  totalProduct: number;
  totalPrice: number;
}

const initialState: CounterState = {
  cartItem: null,
  totalProduct: 0,
  totalPrice: 0,
};

const getSelectedItem = (itemArray: any, item: any) => {
  return itemArray.map((itemArrayItem: any) => {
    if (itemArrayItem.product?._id === item._id) {
      return itemArrayItem;
    }
  });
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartProductAdd: (state, action) => {
      if (state.cartItem) {
        if (
          state.cartItem.find(
            (cartItem: any) => cartItem.product._id === action.payload._id
          )
        ) {
          const afterFilter = state.cartItem.filter(
            (cartItem: any) => cartItem.product._id !== action.payload._id
          );
          state.cartItem = [
            ...afterFilter,
            {
              product: { ...action.payload },
              qty:
                state.cartItem.find(
                  (cartItem: any) => cartItem.product._id === action.payload._id
                ).qty + 1,
              price:
                state.cartItem.find(
                  (cartItem: any) => cartItem.product._id === action.payload._id
                ).price + action.payload.price,
            },
          ];
        } else {
          state.cartItem = [
            ...state.cartItem,
            {
              product: { ...action.payload },
              qty: 1,
              price: action.payload.price,
            },
          ];
        }
      } else {
        state.cartItem = [
          {
            product: { ...action.payload },
            qty: 1,
            price: action.payload.price,
          },
        ];
      }
      state.totalProduct = state.totalProduct + 1;
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    cartProductRemove: (state, action) => {
      state.totalProduct =
        state.totalProduct -
        state.cartItem.find(
          (cartItem: any) => cartItem.product._id === action.payload._id
        ).qty;

      state.totalPrice =
        state.totalPrice -
        state.cartItem.find(
          (cartItem: any) => cartItem.product._id === action.payload._id
        ).price;

      state.cartItem = state.cartItem.filter(
        (cartItem: any) => cartItem.product._id !== action.payload._id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartProductAdd, cartProductRemove } = CartSlice.actions;

export default CartSlice.reducer;
