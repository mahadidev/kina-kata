import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
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
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
