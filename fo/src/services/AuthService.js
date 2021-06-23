import API from "../services/Api";
import { REGISTER_USER, LOGIN } from "../services/CONSTANT";

const register = (email, password) => {
  return API.post(REGISTER_USER, {
    email,
    password,
  });
};

const login = (email, password) => {
  alert(JSON.stringify(email, null, 2));
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
      Authorization: "JWT " + sessionStorage.getItem("user.token"),
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
