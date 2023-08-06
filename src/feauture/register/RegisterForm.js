import React from "react";
import {
  ButtonField,
  Form,
  InputField,
  Validation as validation,
} from "../../components/Form";
import css from "./Register.module.scss";

const RegisterForm = () => {
  function RegisterHandle(vl, ac) {
    console.log(vl, ac);
    ac.setSubmitting(false);
  }

  const validate = {
    name: validation({ name: "name", min: 3 }),
    email: validation({ name: "email", type: "email" }),
    password: validation({ name: "password", min: 8 }).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  };
  return (
    <Form
      initialValues={{
        name: "",
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
            name={"name"}
            placeholder={"UserName..."}
            label={"Name"}
            className={
              form.errors.name
                ? "errorBorder"
                : form.touched.name && "succeededBorder"
            }
          />
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

          <ButtonField
            classname={"buttonGrop"}
            className="primaryColor"
            formik={form}
          >
            Create Account
          </ButtonField>
        </>
      )}
    </Form>
  );
};

export default RegisterForm;
