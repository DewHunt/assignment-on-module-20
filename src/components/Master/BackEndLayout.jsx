"use client";
import UserDropDown from "@/components/Master/UserDropDown";
import "bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useRef } from "react";
import { Navbar } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const BackEndLayout = (props) => {
  let contentRef,
    sideNavRef = useRef();
  let current = usePathname();

  let currentPath = usePathname();
  let title = "HOME";
  if (currentPath === "/") {
    title = "HOME";
  }

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };

  return (
    <Fragment>
      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="side-nav-open">
        <img className="side-nav-logo" src="/images/logo_white1.svg" />

        <Link
          className={
            current === "/"
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          href="/">
          <img className="w-8" src="/images/house.svg" />
          <span className="mx-2 side-bar-item-caption">Home</span>
        </Link>

        <Link
          className={
            current === "/Profile"
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          href="/dashboard/profile">
          <img className="w-8" src="/images/person-bounding-box.svg" />
          <span className="mx-2 side-bar-item-caption">Profile</span>
        </Link>

        <Link
          className={
            current === "/blog"
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          href="/dashboard/categories">
          <img className="w-8" src="/images/person-bounding-box.svg" />
          <span className="mx-2 side-bar-item-caption">Categories</span>
        </Link>

        <Link
          className={
            current === "/blog"
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          href="/dashboard/blog">
          <img className="w-8" src="/images/person-bounding-box.svg" />
          <span className="mx-2 side-bar-item-caption">Blog</span>
        </Link>

        <Link
          className={
            current === "/services"
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          href="/dashboard/services">
          <img className="w-8" src="/images/person-bounding-box.svg" />
          <span className="mx-2 side-bar-item-caption">Services</span>
        </Link>
      </div>

      <div ref={(div) => (contentRef = div)} className="content">
        <Navbar className="px-0 bg-white shadow-sm sticky-top">
          <div className="container-fluid">
            <Navbar.Brand>
              <span className="icon-nav m-0 h5" onClick={MenuBarClickHandler}>
                <AiOutlineMenuUnfold />
              </span>
              <span className="mx-2 f-16">{title}</span>
            </Navbar.Brand>
            <UserDropDown />
          </div>
        </Navbar>
        <div className="p-3">{props.children}</div>
        <Toaster position="bottom-center" />
      </div>
    </Fragment>
  );
};

export default BackEndLayout;
