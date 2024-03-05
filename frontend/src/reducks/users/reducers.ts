import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { SignUpVerify } from "./operations";
import { UserStateType } from "./types";

const reducers = {
  updateUser: (state: UserStateType, action: PayloadAction<UserStateType>) => {
    return { ...state, ...action.payload };
  },
};

const extraReducers = (builder: ActionReducerMapBuilder<UserStateType>) => {
  builder.addCase(SignUpVerify.pending, (state) => {
    state.loading = true;
    state.error = false;
    state.errorMessage = "";
  });
  builder.addCase(SignUpVerify.rejected, (state) => {
    state.loading = false;
    state.error = true;
    state.errorMessage = "Failed to fetch user data";
  });
  builder.addCase(SignUpVerify.fulfilled, (state, action) => {
    state.user = action.payload;
    state.loading = false;
    state.error = false;
    state.errorMessage = "";
  });
};

export const userReducers = {
  reducers,
  extraReducers,
};
