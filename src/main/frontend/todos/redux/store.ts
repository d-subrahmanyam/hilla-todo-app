import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "Frontend/todos/redux/slices";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const todoStore = configureStore({
    reducer: todoSlice.reducer
});

export type RootState = ReturnType<typeof todoStore.getState>
export type AppDispatch = typeof todoStore.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()