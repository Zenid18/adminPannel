import { adminLoginError, adminLoginLoading, adminLoginSuccess, } from "../actions/AuthAction";
import * as url from "../../constants/urls";
import * as Service from '../../constants/services'
import { storeData, getData, storageKey } from "../../constants/storage";

export const adminLogin = (body) => async (dispatch) => {
  dispatch(adminLoginLoading(true));
  try {
    const response = await Service.post(url?.ADMIN_LOGIN, "", body);
    if (response.success == true || response?.status == 200) {
      dispatch(adminLoginSuccess(false));
      console.log(response, "LOGIN_API-----------");
      storeData(storageKey?.AUTH_TOKEN, response?.token);
      storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else {
      dispatch(adminLoginSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(adminLoginError(false));
    return { message: error };
  }
};
