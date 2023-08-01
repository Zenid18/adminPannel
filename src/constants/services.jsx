import * as Url from "./urls";
import axios from "axios";
export const post = async (url, token, body, hide = false) => {
  const headers = token
    ? {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    }
    : {
      "Content-Type": "application/json",
    };

  const completeUrl = Url.BASE_URL + url;
  const data = JSON.stringify(body);

  try {
    const response = await axios.post(completeUrl, data, { headers });
    if (response.data.statusCode === 401) {
      window.location.replace("/");
    }
    return response.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
export const get = async (url, token, hide = false) => {
  try {
    var headers;
    if (token === "" || token === null || token === undefined) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }

    const completeUrl = Url.BASE_URL + url;
    console.log("completeUrl", completeUrl);

    const response = await axios.get(completeUrl, { headers });
    console.log(response, 'responseeeeeeeeeeee')
    if (response.status === 401) {
      window.location.replace("/");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
