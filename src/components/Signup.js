import React from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup(props) {
  const history = useHistory();
  const schema = yup.object({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
    user_phone: yup
      .string()
      .required("Phone Number is Required")
      .max(12, "Character Limit Exceeded"),
    user_email: yup.string().email("Must be a valid email"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        user_email: "",
        user_phone: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        history.push("plantlist");
      }}
    >
      {(formik) => (
        <div className="signup-wrap">
          <h1>Sign Up</h1>
          <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Email"
              name="user_email"
              type="email"
              placeholder="optional"
            />
            <TextField
              label="Phone Number"
              name="user_phone"
              type="tel"
              placeholder="012-345-6789"
            />
            <button type="submit" className="btn-dark">
              Register
            </button>
            <button type="reset" className="btn-danger signup-btn-reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
