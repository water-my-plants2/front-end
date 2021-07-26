import { ErrorMessage, Field, useField } from "formik";
import React from "react";

function TextField({ label, type, ...props }) {
  const [field, meta] = useField(props);
  //   const { label, name, type } = props;
  return (
    <div className="signup-textfield">
      <label htmlFor={field.name}>{label}</label>
      <input
        type={type}
        {...field}
        {...props}
        autoComplete="off"
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
      />
      <ErrorMessage name={field.name} component="p" className="error" />
    </div>
  );
}

export default TextField;
