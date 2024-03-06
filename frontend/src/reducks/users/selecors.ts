import { useSelector } from "react-redux";
import { RootState } from "../store";

export const userSelector = () => {
  const state = useSelector((state: RootState) => state.user);

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    errorMessage: state.errorMessage,
  };
};
