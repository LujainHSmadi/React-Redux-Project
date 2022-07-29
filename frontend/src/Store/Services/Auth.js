import http from "../../http-common";
import axios from "axios";

const Login = (data) => {
  return http.post("/login", data);
};


const Auth = {
  Login,

};
export default Auth;
