"use client";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import { QuillScript } from "@/utility/QuillScript";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

const AddEditForm = ({ serviceInfo, categories, btnName, action }) => {
  const [data, setData] = useState({
    categoryId: 0,
    title: "",
    shortDescription: "",
    longDescription: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    keywords: "",
    type: "",
  });
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    setData(serviceInfo);
  }, [serviceInfo]);

  const inputOnChange = async (name, value) => {
    console.log("value: ", value);
    await setData((data) => ({ ...data, [name]: value }));
    console.log("data: ", data);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (IsEmpty(data.categoryId)) {
      ErrorToast("Category Required");
    } else if (IsEmpty(data.title)) {
      ErrorToast("Service Title Required");
    } else if (IsEmpty(data.shortDescription)) {
      ErrorToast("Service Short Description Required");
    } else if (IsEmpty(data.longDescription)) {
      ErrorToast("Service Long Description Required");
    } else if (IsEmpty(data.img1)) {
      ErrorToast("Service First Image Required");
    } else {
      console.log("data: ", data);
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const result = await fetch("/api/service/upsert", options);
      const resultJson = await result.json();
      setSubmit(false);
      if (resultJson["status"] === "success") {
        let msg = "Service Saved Sucessfull";
        if (action === "update") {
          msg = "Service Update Successfully";
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
              <h5>Service</h5>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
              <Link
                className="btn btn-outline-danger"
                href="/dashboard/services">
                All Services
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
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <select
                  className="form-select"
                  value={data.categoryId}
                  onChange={(e) => {
                    inputOnChange("categoryId", parseInt(e.target.value));
                  }}>
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="categories">Categories</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  value={data.title}
                  onChange={(e) => {
                    inputOnChange("title", e.target.value);
                  }}
                />
                <label htmlFor="title">Ttile</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Image CDN Link"
                  value={data.img1}
                  onChange={(e) => {
                    inputOnChange("img1", e.target.value);
                  }}
                />
                <label htmlFor="image-01">Image 01</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Second Image CDN Link"
                  value={data.img2}
                  onChange={(e) => {
                    inputOnChange("img2", e.target.value);
                  }}
                />
                <label htmlFor="image-02">Image 02</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Third Image CDN Link"
                  value={data.img3}
                  onChange={(e) => {
                    inputOnChange("img3", e.target.value);
                  }}
                />
                <label htmlFor="image-03">Image 03</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Fourth Image CDN Link"
                  value={data.img4}
                  onChange={(e) => {
                    inputOnChange("img4", e.target.value);
                  }}
                />
                <label htmlFor="image-04">Image 04</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Keywords"
                  value={data.keywords}
                  onChange={(e) => {
                    inputOnChange("keywords", e.target.value);
                  }}
                />
                <label htmlFor="keywords">Keywords</label>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Keywords"
                  value={data.type}
                  onChange={(e) => {
                    inputOnChange("type", e.target.value);
                  }}
                />
                <label htmlFor="type">Type</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <label htmlFor="short-dexcription">Short Description</label>
              <ReactQuill
                theme="snow"
                value={data.shortDescription}
                onChange={(e) => {
                  inputOnChange("shortDescription", e);
                }}
                modules={QuillScript.modules}
                formats={QuillScript.formats}
              />
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
              <label htmlFor="long-description">Long Description</label>
              <ReactQuill
                theme="snow"
                value={data.longDescription}
                onChange={(e) => {
                  inputOnChange("longDescription", e);
                }}
                modules={QuillScript.modules}
                formats={QuillScript.formats}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEditForm;
