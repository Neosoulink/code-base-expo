import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// REDUCERS
import navigationReducer from './features/navigation';

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }).concat(logger),
	devTools: __DEV__,
});

// TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
