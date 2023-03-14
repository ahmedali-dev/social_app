import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";

const App = (props) => {
  const activeLogin = () => {
    if (sessionStorage.getItem("token")) {
      return (
        <>
          <Header />
          <div className="bottomspace"></div>
          <main className="main">{props.children}</main>
          <div className="topspace"></div>
        </>
      );
    } else {
      return (
        <>
          <main className="main">{props.children}</main>
        </>
      );
    }
  };
  return <>{activeLogin()}</>;
};

export default App;
