import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

const authContext = createContext({
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const initialToken = Cookies.get("accessToken") ?? "";
  const [token, setToken] = useState(initialToken);

  const login = (token) => {
    setToken(token);
    Cookies.set("accessToken", token, {
      expires: 1,
      secure: true,
      sameSite: "None",
    });
  };

  const logout = () => {
    setToken("");
    Cookies.remove("accessToken");
    window.location.reload();
  };

  const contextValue = {
    token,
    login,
    logout,
  };
  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
