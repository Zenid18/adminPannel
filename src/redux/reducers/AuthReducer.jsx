import { ADMIN_LOGIN_ERROR, ADMIN_LOGIN_LOADING, ADMIN_LOGIN_SUCCESS } from "../constants/AuthActionType";
const initialState = {
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case ADMIN_LOGIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
