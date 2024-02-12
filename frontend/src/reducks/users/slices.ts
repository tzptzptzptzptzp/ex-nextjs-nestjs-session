import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialUsersState } from "./initializes";
import { UsersStateType } from "./types";

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    verifyToken: (
      state: UsersStateType,
      action: PayloadAction<UsersStateType>
    ) => {
      const updatedData = { ...state, ...action.payload };
      return updatedData;
    },
  },
});

export const { verifyToken } = usersSlice.actions;

export const users = usersSlice.reducer;
