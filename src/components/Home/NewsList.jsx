"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const NewsList = (props) => {
  return (
    <div className="row">
      {props.latests.map((item, i) => {
        return (
          <Fade className="p-2 col-md-4">
            <div className="card bg-white shadow-sm">
              <img
                className="card-img-top"
                src={item["img3"]}
                alt="News Image"
              />
              <div className="card-body">
                <h6 className="card-title">{item["title"]}</h6>
                <p>{item["short_des"]}</p>
                <p className="my-2 fw-bold p-0">
                  <i className="bi bi-clock"></i> 3 Days Ago
                </p>
                <Link
                  href={"/Details/" + item["title"] + "?id=" + item["id"]}
                  className="btn mt-2 btn-sm btn-outline-danger">
                  Read More
                </Link>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
};

export default NewsList;
