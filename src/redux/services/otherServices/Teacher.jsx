 
import * as url from '../../../constants/urls';
import * as  Service from '../../../constants/services' 
import {getData, storageKey} from '../../../constants/storage'
import { operateTeacherError, operateTeacherLoading, operateTeacherSuccess } from '../../actions/otherActions/Teacher';

export const getAllTeachers = () => async (dispatch) => {
  dispatch(operateTeacherLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url?.TEACHER_LIST}`,
      token
    );
    const message = response.message;
    if (response.status == 200) {
      dispatch(operateTeacherSuccess(false));
      console.log(response, "GET_TEACHERSSSS-----------");
    }  
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTeacherError(false));
    return { message: error };
  }
};
