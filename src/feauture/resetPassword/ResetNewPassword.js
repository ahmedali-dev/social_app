import React from "react";
import {
  Form,
  InputField,
  ButtonField,
  Validation as vd,
} from "./../../components/Form";
import css from "./../register/Register.module.scss";

const ResetNewPassword = () => {
  function FormSubmitHandle(vl, ac) {
    console.log(vl, ac);
    ac.setSubmitting(false);
  }
  const init = {
    password: "",
  };
  const validate = {
    password: vd({ name: "password", min: 8 }).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  };
  return (
    <Form
      initialValues={init}
      validation={validate}
      onSubmit={FormSubmitHandle}
      className={css.auth_content_form}
    >
      {(form) => (
        <>
          <InputField
            formik={form}
            name="password"
            placeholder="Set new password..."
            classname="inputGrop"
            className={
              form.errors.password
                ? "errorBorder"
                : form.touched.password && "succeededBorder"
            }
          />

          <ButtonField
            formik={form}
            classname={"buttonGrop"}
            className="primaryColor shadowB20"
          >
            Submit
          </ButtonField>
        </>
      )}
    </Form>
  );
};

export default ResetNewPassword;
