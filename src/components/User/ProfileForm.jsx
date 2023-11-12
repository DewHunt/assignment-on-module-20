"use client";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileForm = (props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setData(props.propData);
  }, []);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
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
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const result = await fetch("/api/profile", options);
      const resultJson = await result.json();
      setSubmit(false);
      if (resultJson["status"] === "success") {
        SuccessToast("Update Success");
        router.refresh();
      } else {
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-center">
              <h5>Profile</h5>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <SubmitButton
                className="btn btn-success"
                submit={submit}
                text="Update"
              />
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={data.firstName}
                  onChange={(e) => {
                    inputOnChange("firstName", e.target.value);
                  }}
                />
                <label htmlFor="first-name">First Name</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  value={data.lastName}
                  onChange={(e) => {
                    inputOnChange("lastName", e.target.value);
                  }}
                />
                <label htmlFor="last-name">Last Name</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={data.mobile}
                  onChange={(e) => {
                    inputOnChange("mobile", e.target.value);
                  }}
                />
                <label htmlFor="mobile">Mobile</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={(e) => {
                    inputOnChange("email", e.target.value);
                  }}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={data.password}
                  onChange={(e) => {
                    inputOnChange("password", e.target.value);
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 col-12 ">
          <div className="card container animated fadeIn p-5 gradient-bg">
            <h5>Profile</h5>
            <hr />
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    value={data.firstName}
                    onChange={(e) => {
                      inputOnChange("firstName", e.target.value);
                    }}
                  />
                  <label htmlFor="first-name">First Name</label>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={data.lastName}
                    onChange={(e) => {
                      inputOnChange("lastName", e.target.value);
                    }}
                  />
                  <label htmlFor="last-name">Last Name</label>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile"
                    value={data.mobile}
                    onChange={(e) => {
                      inputOnChange("mobile", e.target.value);
                    }}
                  />
                  <label htmlFor="mobile">Mobile</label>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={(e) => {
                      inputOnChange("email", e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(e) => {
                      inputOnChange("password", e.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-2">
                <SubmitButton
                  className="btn btn-danger w-100 mt-3"
                  submit={submit}
                  text="Update"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </form>
  );
};
export default ProfileForm;
