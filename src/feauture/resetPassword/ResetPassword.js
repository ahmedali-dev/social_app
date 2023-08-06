import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ResetEmailForm from "./ResetEmailForm";
import ResetNewPassword from "./ResetNewPassword";
import css from "./../register/Register.module.scss";
import Logo from "../../components/icons/Logo.jpg";
const ResetPassword = () => {
  return (
    <div className={`${css.auth} flex justc aic`}>
      <div className={`${css.auth_content} `}>
        <div className={`${css.image} flex justc aic`}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={css.msg}>
          <h3>welcome in rocket</h3>
        </div>
        <Routes>
          <Route index element={<ResetEmailForm />} />
          <Route path=":id" element={<ResetNewPassword />} />
          {/* hendle error */}
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
        <Link
          className={`${css.auth_content_switch} flex justc aic`}
          to={"/auth"}
        >
          Go back to <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
