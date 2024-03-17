import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "./initializes";
import { userReducers } from "./reducers";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: userReducers.reducers,
  extraReducers: userReducers.extraReducers,
});

export const { initializeUser, updateUser } = userSlice.actions;
export default userSlice;
