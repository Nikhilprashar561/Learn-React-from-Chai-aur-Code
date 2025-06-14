import { configureStore } from "@reduxjs/toolkit";
import reducer from "./authSlice";

export const Store =  configureStore({
    reducer: reducer
})