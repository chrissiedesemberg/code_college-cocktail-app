// Render Prop

import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div>
    <h1>Type in a cocktail name here</h1>

    <Formik
      initialValues={{ name: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length < 3) {
          errors.name = "Cocktail name too short";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Cocktail name" />
          <span style={{ color: "red", fontWeight: "bold" }}>
            <ErrorMessage name="name" component="div" />
          </span>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
