"use client";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import Link from "next/link";
import { useEffect, useState } from "react";

const AddEditForm = ({ categoryInfo, btnName, action }) => {
  const [data, setData] = useState({ name: "" });
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    setData(categoryInfo);
  }, [categoryInfo]);

  const inputOnChange = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (IsEmpty(data.name)) {
      ErrorToast("Category Name Required");
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
      const result = await fetch("/api/category/upsert", options);
      const resultJson = await result.json();
      setSubmit(false);
      if (resultJson["status"] === "success") {
        let msg = "Category Saved Sucessfull";
        if (action === "update") {
          msg = "Category Update Successfully";
        }
        SuccessToast(msg);
      } else {
        ErrorToast("Request Failed");
      }
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-center">
              <h5>Categories</h5>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <Link
                className="btn btn-outline-danger"
                href="/dashboard/categories">
                All Categories
              </Link>

              <SubmitButton
                className="btn btn-outline-success ms-1"
                submit={submit}
                text={btnName}
              />
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
              value={data.name}
              onChange={(e) => {
                inputOnChange("name", e.target.value);
              }}
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEditForm;
