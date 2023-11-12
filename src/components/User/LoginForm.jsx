"use client";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  let [data, setData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(data.email)) {
      ErrorToast("Email Address Required");
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

      let res = await fetch("/api/user/login", options);
      let ResJson = await res.json();

      setSubmit(false);

      if (ResJson["status"] === "success") {
        SuccessToast("Login Success");
        window.location.href = "/";
      } else {
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <div className="container pt-5">
      <div className="card container-fluid animated fadeIn p-5 gradient-bg">
        <h5>User Login</h5>
        <hr />
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 text-center">
            <Image
              src="/images/login.jpg"
              width={500}
              height={300}
              alt="login-background"
            />
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <form
              onSubmit={formSubmit}
              className="card animated fadeIn gradient-bg">
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter User Email"
                  onChange={(e) => {
                    inputOnChange("email", e.target.value);
                  }}
                />
                <label htmlFor="user-email">Email</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter User Password"
                  onChange={(e) => {
                    inputOnChange("password", e.target.value);
                  }}
                />
                <label htmlFor="user-password">Password</label>
              </div>

              <SubmitButton
                className="btn btn-danger mt-3"
                submit={submit}
                text="Login"
              />

              <div className="my-3 d-flex text-center">
                <Link href="/user/sign-up" className="nav-link mx-2">
                  Sign Up |
                </Link>
                <Link href="/user/email-verify" className="nav-link">
                  Forget Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
