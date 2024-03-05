import { createSlice } from "@reduxjs/toolkit";

import { initialUserState } from "./initializes";
import { userReducers } from "./reducers";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: userReducers.extraReducers,
});

export default userSlice;
