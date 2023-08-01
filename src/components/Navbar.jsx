import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header
      className="header px-4 py-3 position-fixed transition"
    >
      <nav className="navbar nav-bar-main navbar-expand-lg rounded-2 ">
        <div className="container-fluid">
          <button
            className="border-0 bg-transparent d-block d-lg-none"
            onClick={() => props.setSidebarShow(false)}
          >
              <img src="/images/svg/toggle.svg" alt="toggle" />
          </button>
          <h2 className="fw-600 d-none d-lg-block">Dashboard</h2>
          <Link className="d-block d-lg-none">
            {" "}
            <img width={100} src="images/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler border-0 bg-transparent shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="/images/profile-logo.png" alt="profile-logo" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="right-navbar-items d-flex align-itemns-center justify-content-end gap-4">
              <button className="border-0 bg-transparent">
                <img src="/images/message-icon.png" alt="message-icon" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/bell-icon.png" alt="bell-icon" />
              </button>
              <div className="profile-box d-flex gap-3 align-items-center justify-content-center">
                <p className="fw-500">Liza Daniel</p>
                <div className="profile-logo d-none d-lg-block">
                  <img src="/images/profile-logo.png" alt="profile-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
