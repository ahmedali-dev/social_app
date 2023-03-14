import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Home from "./components/Home/Home";
import VerifyAccount from "./components/login/VerifyAccount";
import App from "./App";
import Post from "./components/AddPost/Post";

const route = (path, element, error = "") => {
  return {
    path: `/${path}`,
    element: <App>{element}</App>,
    errorElement: error,
  };
};

let objects = [
  route("/", <Home />),
  route("/home", <Home />),
  route("/addpost", <Post />),
  route("/login", <Login />),
  route("/signup", <Signup />),
  route("/verify", <VerifyAccount />),
];

export const RouterApp = createBrowserRouter(objects);
