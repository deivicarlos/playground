import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';

export const appReducer = combineReducers({
  counter: counterReducer,
});

export const storeX = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
