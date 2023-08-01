import { OPERATE_TEACHER_ERROR, OPERATE_TEACHER_LOADING, OPERATE_TEACHER_SUCCESS } from "../../constants/otherActionTypes/Teacher";

export const operateTeacherLoading = (isLoading) => {
  return {
    type: OPERATE_TEACHER_LOADING,
    isLoading: isLoading,
  };
};
export const operateTeacherSuccess = (isLoading) => {
  return {
    type: OPERATE_TEACHER_SUCCESS,
    isLoading: isLoading,
  };
};
export const operateTeacherError = (isLoading) => {
  return {
    type: OPERATE_TEACHER_ERROR,
    isLoading: isLoading,
  };
};
