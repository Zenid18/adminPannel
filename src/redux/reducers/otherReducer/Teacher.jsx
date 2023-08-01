import { OPERATE_TEACHER_ERROR, OPERATE_TEACHER_LOADING, OPERATE_TEACHER_SUCCESS } from "../../constants/otherActionTypes/Teacher";

 

const initialState = {
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATE_TEACHER_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_TEACHER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case OPERATE_TEACHER_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
