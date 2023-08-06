import React from "react";
import {
  ButtonField,
  Form,
  InputField,
  Validation as validation,
} from "../../components/Form";
import css from "./../register/Register.module.scss";
import { Link } from "react-router-dom";

const AuthForm = () => {
  function RegisterHandle(vl, ac) {
    console.log(vl, ac);
    ac.setSubmitting(false);
  }

  const validate = {
    email: validation({ name: "email", type: "email" }),
    password: validation({ name: "password", min: 8 }),
  };
  return (
    <Form
      initialValues={{
        email: "",
        password: "",
      }}
      validation={validate}
      onSubmit={RegisterHandle}
      className={css.auth_content_form}
    >
      {(form) => (
        <>
          <InputField
            classname={"inputGrop"}
            formik={form}
            name={"email"}
            placeholder={"Email..."}
            label={"Email"}
            className={
              form.errors.email
                ? "errorBorder"
                : form.touched.email && "succeededBorder"
            }
          />
          <InputField
            classname={"inputGrop"}
            formik={form}
            name={"password"}
            placeholder={"Password..."}
            label={"Password"}
            className={
              form.errors.password
                ? "errorBorder"
                : form.touched.password && "succeededBorder"
            }
          ></InputField>

          <Link
            className={`${css.auth_content_form_forget} flex aic`}
            to={"/resetPass"}
          >
            Forget Password?
          </Link>

          <ButtonField
            classname={"buttonGrop"}
            className="primaryColor"
            formik={form}
          >
            Sign In
          </ButtonField>
        </>
      )}
    </Form>
  );
};

export default AuthForm;
