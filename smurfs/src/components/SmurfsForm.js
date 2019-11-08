// IMPORTS

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

// BASE SMURF FORM

const SmurfsForm = ({ errors, touched, status, props }) => {
  const [forms, setForm] = useState([]);
  console.log(forms);

  useEffect(() => {
    if (status) {
      setForm([...forms, status]);
    }
  }, [status]);

  return (
    <div className="Smurf-Form">
      <h1> Smurf Village </h1>
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="height" placeholder="height" />
        {touched.height && errors.height && (
          <p className="error">{errors.height}</p>
        )}
        <Field type="text" name="age" placeholder="age" />
        {touched.age && errors.age && <p className="error">{errors.age}</p>}
        <button type="submit">Submit</button>

        {forms.map(form => (
          <p key={form.id}>
            Name: {form.name}
            <br />
            Height: {form.height}
            <br />
            Age: {form.age}
          </p>
        ))}
      </Form>
    </div>
  );
};

// FORMIK SMURF FORM

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, height, age }) {
    return {
      name: name || "",
      height: height || "",
      age: age || ""
    };
  },

  // YUP VALIDATION

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    height: Yup.string().required(),
    age: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SmurfsForm);

export default FormikSmurfForm;