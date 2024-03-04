import { combineReducers } from "redux";
import userSlice from "./users/slices";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
