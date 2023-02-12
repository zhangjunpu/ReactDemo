import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import player from "./player";

const store = configureStore({
  reducer: {
    player,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
