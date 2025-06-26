"use client";
import * as Yup from "yup";
import OutlinedInput from "../Components/OutlinedInput";
import { Formik } from "formik";

const SignupSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string()
    .min(8, "At least 8 chars")
    .required("Password is required"),
  phone: Yup.string().matches(/^[6-9]\d{9}/, "Not a valid number").required("Mobile Number is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        phone: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
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
            label="Password"
            type="password"
            isWrong={touched.password && !!errors.password}
            onChangeHandler={handleChange("password")}
            onBlurHandler={handleBlur("password")}
            value={values.password}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <OutlinedInput
            label="Mobile No."
            isWrong={touched.phone && !!errors.phone}
            onChangeHandler={handleChange("phone")}
            onBlurHandler={handleBlur("phone")}
            value={values.phone}
          />
          {errors.phone && touched.phone && <div>{errors.phone}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default FormikForm;
