import API from "service/API.js";
import { LOGIN } from "./CONSTANT";

const register = (username, email, password) => {
  return API.post(REGISTER_USER, {
    email,
    password,
  });
};

const login = (email, password) => {
  return API.post(LOGIN, {
    email,
    password,
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

function authHeader() {
  if (sessionStorage.getItem("token")) {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      Authorization: "JWT " + user.accessToken,
      accept: "application/json",
    };
  } else {
    return {};
  }
}

const fetchUsers = () => API.get("auth/users/");

const fetchCurrentUser = () => API.get("auth/users/me/", authHeader);

const verifyToken = (body) => API.post("auth/jwt/verify/", body);

function logout() {
  sessionStorage.removeItem("token");
  window.location.href = "/auth/sign-in";
}

export default {
  register,
  login,
  logout,
  authHeader,
};
