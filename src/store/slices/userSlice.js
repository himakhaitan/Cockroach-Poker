import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { names } from "../../utils/data";

const initialState = {
  name: "unknown",
  avatar: "0",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = names[action.payload];
    },

    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  },
});

export const { setName, setAvatar } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserAvatar = (state) => state.user.avatar;
export default userSlice.reducer;
