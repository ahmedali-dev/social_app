import React from "react";
import Logo from "./../../components/icons/Logo.jpg";
import css from "./../register/Register.module.scss";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
const Auth = () => {
  return (
    <div className={`${css.auth} flex justc aic`}>
      <div className={`${css.auth_content} `}>
        <div className={`${css.image} flex justc aic`}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={css.msg}>
          <h3>welcome back in rocket</h3>
        </div>
        <AuthForm />
        <Link
          className={`${css.auth_content_switch} flex justc aic`}
          to={"/register"}
        >
          Do'nt have account? <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
