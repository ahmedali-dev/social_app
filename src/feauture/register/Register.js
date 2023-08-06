import React from "react";
import RegisterForm from "./RegisterForm";
import Logo from "./../../components/icons/Logo.jpg";
import css from "./Register.module.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={`${css.auth} flex justc aic`}>
      <div className={`${css.auth_content} `}>
        <div className={`${css.image} flex justc aic`}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={css.msg}>
          <h3>welcome in rocket</h3>
        </div>
        <RegisterForm />
        <Link
          className={`${css.auth_content_switch} flex justc aic`}
          to={"/auth"}
        >
          Do you have account? <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
