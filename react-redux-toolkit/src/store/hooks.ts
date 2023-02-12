import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from ".";

// 自定义 hooks
// useDispatch 的 Dispatch 无法处理 Thunk，增强为 AppDiapatch
// useSelector 不用每次都写 state: RootState
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
