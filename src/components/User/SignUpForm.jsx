"use client";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

const SignUpForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    if (IsEmpty(data.firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(data.lastName)) {
      ErrorToast("Last Name Required");
    } else if (IsEmpty(data.mobile)) {
      ErrorToast("Mobile No Required");
    } else if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(data.password)) {
      ErrorToast("Password Required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let res = await fetch("/api/user/registration", options);
      let ResJson = await res.json();

      if (ResJson["status"] === "success") {
        SuccessToast("Registration Success");
        router.replace("/user/login");
      } else {
        setSubmit(false);
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <div className="container p-5">
      <div className="card container-fluid animated fadeIn p-5 gradient-bg">
        <h5>User Registration</h5>
        <hr />
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 text-center">
            <Image
              src="/images/reg-00.jpg"
              width={385}
              height={385}
              alt="signup-background"
            />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6 col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter First Name"
                onChange={(e) => {
                  inputOnChange("firstName", e.target.value);
                }}
              />
              <label htmlFor="first-name">First Name</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Last Name"
                onChange={(e) => {
                  inputOnChange("lastName", e.target.value);
                }}
              />
              <label htmlFor="last-name">Last Name</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Mobile"
                onChange={(e) => {
                  inputOnChange("mobile", e.target.value);
                }}
              />
              <label htmlFor="mobile">Mobile</label>
            </div>

            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter Email"
                onChange={(e) => {
                  inputOnChange("email", e.target.value);
                }}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Enter Password"
                onChange={(e) => {
                  inputOnChange("password", e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>

            <SubmitButton
              className="btn btn-danger w-100 mt-3"
              submit={submit}
              onClick={formSubmit}
              text="Sign Up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
