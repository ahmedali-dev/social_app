import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";

const App = (props) => {
  return (
    <>
      {sessionStorage.getItem("token") ? <Header /> : null}
      {/* main content */}
      <main className="bottomspace topspace">{props.children}</main>
    </>
  );
};

export default App;
