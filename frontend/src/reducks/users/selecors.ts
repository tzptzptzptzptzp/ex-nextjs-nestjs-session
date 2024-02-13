import { createSelector } from "@reduxjs/toolkit";
import { UsersStateType } from "./types";

const usersSelector = (state: UsersStateType) => state;

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);
