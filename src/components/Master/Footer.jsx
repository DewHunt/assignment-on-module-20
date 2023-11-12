"use client";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";
import Link from "next/link";
import { useState } from "react";

const Footer = (props) => {
  let [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
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
      let res = await fetch("/api/subscribe", options);
      let ResJson = await res.json();
      setSubmit(false);
      setData({ email: "" });
      if (ResJson["status"] === "success") {
        SuccessToast("Request Success");
      } else {
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <div className="section-footer">
      <div className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-xx-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-3">
              <h5 className="text-white fw-bold my-3"> ABOUT </h5>
              <p className="text-white">{props.data.socials[0]?.about}</p>

              <div className="d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex align-items-center">
                  <a target="_blank" href={props.data.socials[0]?.facebook}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white bi bi-facebook"></i>
                    </div>
                  </a>

                  <a target="_blank" href={props.data.socials[0]?.youtube}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className="h3 text-white  mx-2 bi bi-youtube"></i>
                    </div>
                  </a>

                  <a target="_blank" href={props.data.socials[0]?.twitter}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white mx-2 bi bi-twitter"></i>
                    </div>
                  </a>

                  <a target="_blank" href={props.data.socials[0]?.linkedin}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white mx-2 bi bi-linkedin"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xx-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              {props.data["categories"].map((Item, i) => {
                if (i < 4) {
                  return (
                    <Link
                      key={i}
                      className="nav-link text-white my-1"
                      href={"/News/" + Item["name"] + "?id=" + Item["id"]}>
                      {Item["name"]}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
