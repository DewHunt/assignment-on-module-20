"use client";
import UserDropDown from "@/components/Master/UserDropDown";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavBar(props) {
  const today = new Date();
  return (
    <>
      <div className="py-2 bg-dark text-white container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h6>
                <i className="bi bi-calendar2-check"></i> Today:&nbsp;
                <span>
                  {today.toLocaleString("default", { month: "long" })}&nbsp;
                  {today.toLocaleString("default", { day: "2-digit" })},&nbsp;
                  {today.toLocaleString("default", { year: "numeric" })}&nbsp;
                </span>
              </h6>
            </div>
            <div className="col-md-4">
              <span className="float-end">
                <a
                  target="_blank"
                  className="text-white"
                  href={props.data.socials[0]?.facebook}>
                  <i className="mx-2 bi bi-facebook"></i>
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={props.data.socials[0]?.youtube}>
                  <i className="mx-2 bi bi-youtube"></i>
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={props?.data.socials[0]?.twitter}>
                  <i className="mx-2 bi bi bi-twitter"></i>
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={props?.data.socials[0]?.linkedin}>
                  <i className="mx-2 bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <img className="nav-logo" src={"/images/logo.svg"} alt="img" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link className="nav-link f-13" href="/">
                Home
              </Link>
              <Link className="nav-link f-13" href="/about-us">
                About Us
              </Link>
              <Link className="nav-link f-13" href="/contact-us">
                Contact Us
              </Link>
              <Link className="nav-link f-13" href="/blogs">
                Blogs
              </Link>
              <Link className="nav-link f-13" href="/services">
                Services
              </Link>
              <Link className="nav-link f-13" href="/user/sign-up">
                Registration
              </Link>
            </Nav>
            <div className="d-flex ms-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <button className="btn btn-danger" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>

            {props.firstName === "0" ? (
              <Link className="btn ms-3 btn-outline-danger" href="/user/login">
                Login
              </Link>
            ) : (
              <UserDropDown />
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default AppNavBar;
