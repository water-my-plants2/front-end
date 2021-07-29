import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup(props) {
  const history = useHistory();
  const schema = yup.object({
    username: yup
      .string()
      .required("Username is Required")
      .min(3, "Must be Over 3 Characters")
      .max(25, "Username Must be Less Than 25 Characters"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Must be Over 8 Characters"),
    user_phone: yup
      .string()
      .required("Phone Number is Required")
      .test("numberFormat", "Must be in the Correct Format", function (value) {
        if (!value) return true;
        return value[3] === "-" && value[7] === "-";
      })
      .max(12, "Character Limit Exceeded"),
    user_email: yup.string().email("Must be a valid email"),
  });
  // if user is loading signup form, remove any existing auth token
  localStorage.removeItem("token");

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        user_phone: "",
        user_email: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("onSubmit", values);
        props.register(values);
        history.push("plantlist");
      }}
    >
      {(formik) => {
        return (
          <div className="signup-wrap">
            <h1>Sign Up</h1>

            <Form>
              <TextField
                label="Username"
                name="username"
                type="text"
                className="signup-textfield"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                className="signup-textfield"
              />

              <TextField
                label="Phone Number"
                name="user_phone"
                type="tel"
                placeholder="012-345-6789"
                className="signup-textfield"
              />
              <TextField
                label="Email"
                name="user_email"
                type="email"
                placeholder="optional"
                className="signup-textfield"
              />
              <button type="submit" className="btn btn-dark">
                Register
              </button>
              <button type="reset" className="btn btn-danger signup-btn-reset">
                Reset
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default Signup;
