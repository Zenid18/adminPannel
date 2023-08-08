import * as Url from "./urls";
import axios from "axios";
export const post = async (url, token, body, hide = false) => {
  var headers;
  if (token == "" || token == null || token == undefined) {
    headers = {
      "Content-Type": "application/json",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
  }
  const completeUrl = Url.BASE_URL + url;
  let data = JSON.stringify(body);
  console.log("completeUrl", completeUrl, body, headers);
  try {
    const response = await axios.post(completeUrl, data, { headers });
    if (response.data.status === 401) {
      window.location.replace("/");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      return { message: error.response.data.message };
    } else {
      return { message: "An error occurred." };
    }
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
    if (error.response) {
      return { message: error.response.data.message };
    } else {
      return { message: "An error occurred." };
    }
  }
};
export const uploadImageApi = async (url, token, formData, hide = false) => {
  console.log(formData, token, url, "image upload=======");

  const headers = {
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const completeUrl = Url.BASE_URL + url;
  console.log("completeUrl", completeUrl);

  try {
    const res = await axios.post(completeUrl, formData, { headers });
    console.log("check the response", res);

    if (res.status === 401) {
      window.location.replace("/");
    }

    return res.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      return { message: error.response.data.message };
    } else {
      return { message: "An error occurred." };
    }
  }
}
