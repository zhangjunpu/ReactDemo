import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import player from "./player";
import recommend from "./recommend";

const store = configureStore({
  reducer: {
    player,
    recommend,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
