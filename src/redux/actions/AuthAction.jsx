import { ADMIN_LOGIN_ERROR, ADMIN_LOGIN_LOADING, ADMIN_LOGIN_SUCCESS } from "../constants/AuthActionType";

 

export const adminLoginLoading = (isLoading) => {
  return {
    type: ADMIN_LOGIN_LOADING,
    isLoading: isLoading,
  };
};
export const adminLoginSuccess = (isLoading) => {
  return {
    type: ADMIN_LOGIN_SUCCESS,
    isLoading: isLoading,
  };
};
export const adminLoginError = (isLoading) => {
  return {
    type: ADMIN_LOGIN_ERROR,
    isLoading: isLoading,
  };
};
