import React from "react";
import css from "./../assets/Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo.jpg";
const Header = () => {
  return (
    <div>
      <img src={<Logo />} alt="logo" />
      <Link to={"/"}>home</Link>
      <Link to={"/profile"}>profile</Link>
      <Link to={"/notafication"}>notafication</Link>
    </div>
  );
};

export default Header;
