import API from "service/API.js";
import { LOGIN } from "./CONSTANT";

const register = (username, email, password) => {
  return axios.post(API_URL + REGISTER_USER, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + LOGIN, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}

export default {
  register,
  login,
  logout,
  authHeader,
};
