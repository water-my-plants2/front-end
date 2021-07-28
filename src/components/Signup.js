import React, { useState } from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup(props) {
  // const [hasLabel, setHasLabel] = useState(true);
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
      // validationSchema={schema}

      onSubmit={(values) => {
        console.log("onSubmit", values);
        props.register(values);
        history.push("plantlist");
      }}
    >
      {(formik) => (
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
