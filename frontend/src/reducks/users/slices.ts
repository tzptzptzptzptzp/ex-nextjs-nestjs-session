import { createSlice } from "@reduxjs/toolkit";

import { initialUserState } from "./initializes";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
});

export default userSlice;
