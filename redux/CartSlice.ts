import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  cartItems: any;
  totalProduct: number;
  totalPrice: number;
}

const initialState: CounterState = {
  cartItems: null,
  totalProduct: 0,
  totalPrice: 0,
};

const addNewProduct = (state: any, cartItem: any) => {
  state.cartItems = state.cartItems
    ? [...state.cartItems, cartItem]
    : [cartItem];
  state.totalPrice = state.totalPrice + cartItem.price;
  state.totalProduct = state.totalProduct + cartItem.qty;
};

const addExistingProduct = (state: any, action: any) => {
  const cartItems = state.cartItems.filter(
    (cartItem: any) => cartItem.product._id !== action.product._id
  );
  const oldCartItem = state.cartItems.find(
    (cartItem: any) => cartItem.product._id === action.product._id
  );
  const newCartItem = {
    product: action.product,
    qty: oldCartItem.qty + action.qty,
    price: oldCartItem.price + action.price,
  };
  state.cartItems = [...cartItems, newCartItem];
  state.totalPrice = state.totalPrice + action.price;
  state.totalProduct = state.totalProduct + action.qty;
};

const removeItem = (state: any, action: any) => {
  const cartItems = state.cartItems.filter(
    (cartItem: any) => cartItem.product._id !== action.product._id
  );
  const oldCartItem = state.cartItems.find(
    (cartItem: any) => cartItem.product._id === action.product._id
  );

  if (action.qty > 0) {
    const newCartItem = {
      product: action.product,
      qty: action.qty,
      price: action.price,
    };
    state.totalPrice = state.totalPrice - oldCartItem.price + action.price;
    state.totalProduct = state.totalProduct - oldCartItem.qty + action.qty;
    state.cartItems = [...cartItems, newCartItem];
  } else {
    state.totalPrice = state.totalPrice - oldCartItem.price;
    state.totalProduct = state.totalProduct - oldCartItem.qty;
    state.cartItems = cartItems;
  }
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action: any) => {
      const product = action.payload.product;
      const qty = action.payload.qty;
      const price = action.payload.price;
      const cartItem = {
        product: product,
        qty: qty,
        price: price,
      };
      if (
        state.cartItems &&
        state.cartItems.find(
          (cartItem: any) => cartItem.product._id === product._id
        )
      ) {
        addExistingProduct(state, cartItem);
      } else {
        addNewProduct(state, cartItem);
      }
    },
    removeCartItem: (state, action: any) => {
      const product = action.payload.product;
      const qty = action.payload.qty;
      const price = action.payload.price;
      const cartItem = {
        product: product,
        qty: qty,
        price: price,
      };
      removeItem(state, cartItem);
    },
    clearCart: (state: any, action: any) => {
      state.cartItems = null;
      state.totalProduct = 0;
      state.totalPrice = 0;
    },
  },
});

export default CartSlice.reducer;
export const { addCartItems, removeCartItem, clearCart } = CartSlice.actions;
