import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  socket: null,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.store,
        };
      },
    },
  },
});

export const { setSocket } = storeSlice.actions;
export const selectSocket = (state) => state.store.socket;
export default storeSlice.reducer;
