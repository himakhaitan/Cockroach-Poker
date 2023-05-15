import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userSlice } from "./slices/userSlice";
import { storeSlice } from "./slices/storeSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [storeSlice.name]: storeSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore);
