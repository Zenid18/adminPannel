import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData, storageKey } from "../constants/storage";
import * as url from '../constants/urls'
import { toast } from "react-toastify";
export default function Navbar(props) {
  const navigate = useNavigate()
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  useEffect(() => {
    const getUser = async () => {
      const data = await getData(storageKey?.USER_DATA)
      const data1 = JSON?.parse(data)
      if (data1) {
        setImage(data1?.user_img)
        setName(data1?.first_name + " " + data1?.last_name)
      }
    };
    getUser();
  }, []);
  const handleLogout = () => {
    toast.success("Logout successfully")
    localStorage.removeItem(storageKey?.AUTH_TOKEN);
    localStorage.removeItem(storageKey?.USER_DATA);
    navigate("/", { replace: true });
  }
  return (
    <header className="header px-4 py-3 position-fixed transition">
      <nav className="navbar nav-bar-main navbar-expand-lg rounded-2 ">
        <div className="container-fluid">
          <button
            className="border-0 bg-transparent d-block d-lg-none"
            onClick={() => props.setSidebarShow(false)}
          >
            <img src="/images/svg/toggle.svg" alt="toggle" />
          </button>
          <h2 className="fw-600 d-none d-lg-block">Dashboard </h2>
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
                <img src="/images/svg/message-icon.svg" alt="message-icon" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/svg/bell-icon.svg" alt="bell-icon" />
              </button>
              <div className="profile-box d-flex gap-3 align-items-center justify-content-center">
                <p className="fw-500">{name ? name : "Liza Daniel"}</p>
                <div className="profile-logo d-none d-lg-block">
                  <div class="dropdown">
                    <button
                      class="border-0 bg-transparent"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={image ? url?.BASE_URL + image : "/images/profile-logo.png"}
                        className="profile-img"
                        alt="profile-logo"
                      />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/my-account">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <span onClick={() => handleLogout()} class="dropdown-item">
                          Log Out
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
