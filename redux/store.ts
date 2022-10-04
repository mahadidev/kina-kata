import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './AuthSlice';
import basicReducer from './BasicSlice';
import cartReducer from './CartSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	basic: basicReducer,
	cart: cartReducer,
	auth: authReducer,
});

const reducers = persistReducer(
	persistConfig,
	rootReducer
) as typeof rootReducer;

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
