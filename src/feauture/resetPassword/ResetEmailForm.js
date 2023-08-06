import React from "react";
import {
  Form,
  InputField,
  ButtonField,
  Validation as vd,
} from "./../../components/Form";
import css from "./../register/Register.module.scss";

const ResetEmailForm = () => {
  function FormSubmitHandle(vl, ac) {
    console.log(vl, ac);
    ac.setSubmitting(false);
  }
  const init = {
    email: "",
  };
  const validate = {
    email: vd({ name: "email", type: "email" }),
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
            name="email"
            placeholder="Email..."
            classname="inputGrop"
            className={
              form.errors.email
                ? "errorBorder"
                : form.touched.email && "succeededBorder"
            }
          />

          <ButtonField
            formik={form}
            classname={"buttonGrop"}
            className="primaryColor shadowB20"
          >
            Verify Account
          </ButtonField>
        </>
      )}
    </Form>
  );
};

export default ResetEmailForm;
