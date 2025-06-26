"use client";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import OutlinedInput from "../Components/OutlinedInput";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Not a valid email")
    .required("Email is required"),
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
    .required("Last Name is required"),
});

const ValidationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", firstName: "", lastName: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setIsSubmitted(true);
        console.log("Form submitted with:", values);
        actions.setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <OutlinedInput
            label="Email"
            isWrong={touched.email && !!errors.email}
            onChangeHandler={handleChange("email")}
            onBlurHandler={handleBlur("email")}
            value={values.email}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <OutlinedInput
            label="First Name"
            isWrong={touched.firstName && !!errors.firstName}
            onChangeHandler={handleChange("firstName")}
            onBlurHandler={handleBlur("firstName")}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

          <OutlinedInput
            label="Last Name"
            isWrong={touched.lastName && !!errors.lastName}
            onChangeHandler={handleChange("lastName")}
            onBlurHandler={handleBlur("lastName")}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

          <button type="submit" className="button">Submit</button>
          {isSubmitted && <p>Form submitted successfully!</p>}
        </form>
      )}
    </Formik>
  );
};

export default ValidationForm;
