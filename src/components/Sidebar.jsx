import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div
      className={`sidebar p-3 position-fixed overflow-y-auto overflow-x-hidden transition ${
        props.sidebarShow ? "sidebar-show" : ""
      } `}
    >
      <div className="sidbar-logo mb-5 d-flex align-items-center justify-content-center position-relative">
        <Link>
          <img className="d-none d-lg-block" src="images/logo.png" alt="logo" />
          <img
            className="d-block d-lg-none"
            width={70}
            src="images/logo-sm.png"
            alt="logo"
          />
        </Link>
        <button
          className="border-0 bg-transparent d-block d-lg-none"
          onClick={() => props.setSidebarShow(true)}
        >
          <img src="/images/svg/cross.svg" alt="cross" />
        </button>
      </div>

      <div className="sidebar-items-box ps-3 d-flex flex-column gap-3 ">
        <div
          onClick={() => props.setSidebarActive("dashboard")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "dashboard" ? "sidebar-active" : ""
          } `}
        >
          <Link
            to="/dashboard"
            className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center"
          >
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 19 22"
                >
                  <g clipPath="url(#clip0_758_9)">
                    <path d="M9.5 11C12.4984 11 14.9286 8.53789 14.9286 5.5C14.9286 2.46211 12.4984 0 9.5 0C6.50156 0 4.07143 2.46211 4.07143 5.5C4.07143 8.53789 6.50156 11 9.5 11ZM13.3 12.375H12.5917C11.6502 12.8133 10.6027 13.0625 9.5 13.0625C8.39732 13.0625 7.35402 12.8133 6.40826 12.375H5.7C2.55312 12.375 0 14.9617 0 18.15V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V18.15C19 14.9617 16.4469 12.375 13.3 12.375Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_758_9">
                      <rect width="20" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            Dashboard
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("instructors")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "instructors" ? "sidebar-active" : ""
          } `}
        >
          <Link
            to="/instructors"
            className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center"
          >
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.3938 7.25195L15.1212 7.33706L4.23234 11.0887L1.75665 11.9281L3.19833 12.4029V20.2413C2.67828 20.5522 2.32723 21.1192 2.32723 21.7821C2.32723 22.2573 2.51078 22.713 2.83751 23.049C3.16424 23.385 3.60738 23.5738 4.06944 23.5738C4.5315 23.5738 4.97464 23.385 5.30137 23.049C5.6281 22.713 5.81165 22.2573 5.81165 21.7821C5.81165 21.1192 5.4606 20.5522 4.94055 20.2413V13.021L6.68276 13.6078V18.1989C6.68276 18.9334 7.11831 19.5426 7.63575 19.9636C8.15319 20.382 8.79606 20.6776 9.56786 20.9428C11.1132 21.4713 13.1499 21.7821 15.3938 21.7821C17.6378 21.7821 19.6744 21.4722 21.2198 20.9419C21.9916 20.6776 22.6345 20.382 23.1519 19.9627C23.6693 19.5426 24.1049 18.9334 24.1049 18.1989V13.6078L26.5553 12.7675L29.031 11.9281L26.5544 11.0878L15.6656 7.33706L15.3938 7.25195ZM15.3938 9.12869L23.5604 11.9281L15.3938 14.7276L7.2272 11.9281L15.3938 9.12869ZM8.42497 14.2241L15.122 16.5192L15.3938 16.6034L15.6665 16.5183L22.3627 14.2232V18.1989C22.3627 18.2078 22.3662 18.3117 22.09 18.5348C21.8148 18.7587 21.3208 19.0409 20.6745 19.2631C19.3835 19.7047 17.4801 19.9905 15.3938 19.9905C13.3075 19.9905 11.4042 19.7056 10.1123 19.2622C9.46769 19.0409 8.9729 18.7579 8.69763 18.5348C8.42062 18.3108 8.42497 18.2078 8.42497 18.1989V14.2232V14.2241Z" />
                </svg>
              </span>
            </div>
            Instructors
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("subscription")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "subscription" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.1667 10.8333H3.25V13H15.1667V10.8333ZM15.1667 6.5H3.25V8.66667H15.1667V6.5ZM3.25 17.3333H10.8333V15.1667H3.25V17.3333ZM23.2917 12.4583L24.9167 14.0833L17.3333 21.6667L12.4583 16.7917L14.0833 15.1667L17.3333 18.4167L23.2917 12.4583Z" />
                </svg>
              </span>
            </div>
            Subscription Plans
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("user")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "user" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.25 14.9287C7.25 14.5717 7.32032 14.2181 7.45695 13.8883C7.59358 13.5584 7.79384 13.2587 8.0463 13.0063C8.29876 12.7538 8.59848 12.5535 8.92833 12.4169C9.25818 12.2803 9.61172 12.21 9.96875 12.21C10.3258 12.21 10.6793 12.2803 11.0092 12.4169C11.339 12.5535 11.6387 12.7538 11.8912 13.0063C12.1437 13.2587 12.3439 13.5584 12.4805 13.8883C12.6172 14.2181 12.6875 14.5717 12.6875 14.9287C12.6875 15.6498 12.4011 16.3413 11.8912 16.8512C11.3813 17.361 10.6898 17.6475 9.96875 17.6475C9.24769 17.6475 8.55617 17.361 8.0463 16.8512C7.53644 16.3413 7.25 15.6498 7.25 14.9287ZM9.96875 14.0225C9.7284 14.0225 9.49789 14.1179 9.32793 14.2879C9.15798 14.4579 9.0625 14.6884 9.0625 14.9287C9.0625 15.1691 9.15798 15.3996 9.32793 15.5695C9.49789 15.7395 9.7284 15.835 9.96875 15.835C10.2091 15.835 10.4396 15.7395 10.6096 15.5695C10.7795 15.3996 10.875 15.1691 10.875 14.9287C10.875 14.6884 10.7795 14.4579 10.6096 14.2879C10.4396 14.1179 10.2091 14.0225 9.96875 14.0225ZM13.8958 14.9287C13.8958 14.6884 13.9913 14.4579 14.1613 14.2879C14.3312 14.1179 14.5617 14.0225 14.8021 14.0225H17.8229C18.0633 14.0225 18.2938 14.1179 18.4637 14.2879C18.6337 14.4579 18.7292 14.6884 18.7292 14.9287C18.7292 15.1691 18.6337 15.3996 18.4637 15.5695C18.2938 15.7395 18.0633 15.835 17.8229 15.835H14.8021C14.5617 15.835 14.3312 15.7395 14.1613 15.5695C13.9913 15.3996 13.8958 15.1691 13.8958 14.9287ZM7.25 9.49121C7.25 9.25086 7.34548 9.02035 7.51543 8.8504C7.68539 8.68044 7.9159 8.58496 8.15625 8.58496H17.8229C18.0633 8.58496 18.2938 8.68044 18.4637 8.8504C18.6337 9.02035 18.7292 9.25086 18.7292 9.49121C18.7292 9.73156 18.6337 9.96207 18.4637 10.132C18.2938 10.302 18.0633 10.3975 17.8229 10.3975H8.15625C7.9159 10.3975 7.68539 10.302 7.51543 10.132C7.34548 9.96207 7.25 9.73156 7.25 9.49121Z" />
                  <path d="M7.55208 3.75195C6.51056 3.75195 5.51169 4.1657 4.77522 4.90217C4.03874 5.63864 3.625 6.63751 3.625 7.67904V18.554C3.625 19.5956 4.03874 20.5944 4.77522 21.3309C5.51169 22.0674 6.51056 22.4811 7.55208 22.4811H18.4271C19.4686 22.4811 20.4675 22.0674 21.204 21.3309C21.9404 20.5944 22.3542 19.5956 22.3542 18.554V7.67904C22.3542 6.63751 21.9404 5.63864 21.204 4.90217C20.4675 4.1657 19.4686 3.75195 18.4271 3.75195H7.55208ZM5.4375 7.67904C5.4375 6.51179 6.38483 5.56445 7.55208 5.56445H18.4271C19.5943 5.56445 20.5417 6.51179 20.5417 7.67904V18.554C20.5427 19.006 20.3984 19.4463 20.1301 19.8101C19.8619 20.1738 19.4839 20.4418 19.0518 20.5744C18.8548 20.6348 18.6446 20.6686 18.4271 20.6686H7.55208C7.2743 20.6689 6.99919 20.6145 6.74249 20.5083C6.48579 20.4021 6.25256 20.2464 6.05614 20.05C5.85972 19.8536 5.70397 19.6203 5.59782 19.3636C5.49166 19.1069 5.43718 18.8318 5.4375 18.554V7.67904Z" />
                  <path d="M10.575 25.5023C9.91525 25.503 9.266 25.3372 8.6873 25.0204C8.1086 24.7036 7.61913 24.2459 7.26416 23.6898H19.0333C20.2351 23.6898 21.3876 23.2124 22.2374 22.3627C23.0872 21.5129 23.5646 20.3603 23.5646 19.1586V7.39062C24.1206 7.74567 24.5782 8.23516 24.895 8.81384C25.2118 9.39253 25.3776 10.0417 25.3771 10.7015V19.1598C25.3768 20.842 24.7083 22.4553 23.5186 23.6447C22.329 24.8341 20.7156 25.5023 19.0333 25.5023H10.575Z" />
                </svg>
              </span>
            </div>
            Users
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("resources")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "resources" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 18.375C20.5625 18.375 20.125 18.2 19.775 17.85L17.15 15.225C16.8 14.875 16.625 14.4375 16.625 14C16.625 13.5625 16.8 13.125 17.15 12.775L19.775 10.15C20.125 9.8 20.5625 9.625 21 9.625C21.4375 9.625 21.875 9.8 22.225 10.15L24.85 12.775C25.2 13.125 25.375 13.5625 25.375 14C25.375 14.4375 25.2 14.875 24.85 15.225L22.225 17.85C21.875 18.2 21.4375 18.375 21 18.375ZM21 11.375L18.375 14L21 16.625L23.625 14L21 11.375ZM14 11.375C13.5625 11.375 13.125 11.2 12.775 10.85L10.15 8.225C9.8 7.875 9.625 7.4375 9.625 7C9.625 6.5625 9.8 6.125 10.15 5.775L12.775 3.15C13.125 2.8 13.5625 2.625 14 2.625C14.4375 2.625 14.875 2.8 15.225 3.15L17.85 5.775C18.2 6.125 18.375 6.5625 18.375 7C18.375 7.4375 18.2 7.875 17.85 8.225L15.225 10.85C14.875 11.2 14.4375 11.375 14 11.375ZM14 4.375L11.375 7L14 9.625L16.625 7L14 4.375ZM14 25.375C13.5625 25.375 13.125 25.2 12.775 24.85L10.15 22.225C9.8 21.875 9.625 21.4375 9.625 21C9.625 20.5625 9.8 20.125 10.15 19.775L12.775 17.15C13.125 16.8 13.5625 16.625 14 16.625C14.4375 16.625 14.875 16.8 15.225 17.15L17.85 19.775C18.2 20.125 18.375 20.5625 18.375 21C18.375 21.4375 18.2 21.875 17.85 22.225L15.225 24.85C14.875 25.2 14.4375 25.375 14 25.375ZM14 18.375L11.375 21L14 23.625L16.625 21L14 18.375ZM7 18.375C6.5625 18.375 6.125 18.2 5.775 17.85L3.15 15.225C2.8 14.875 2.625 14.4375 2.625 14C2.625 13.5625 2.8 13.125 3.15 12.775L5.775 10.15C6.125 9.8 6.5625 9.625 7 9.625C7.4375 9.625 7.875 9.8 8.225 10.15L10.85 12.775C11.2 13.125 11.375 13.5625 11.375 14C11.375 14.4375 11.2 14.875 10.85 15.225L8.225 17.85C7.875 18.2 7.4375 18.375 7 18.375ZM7 11.375L4.375 14L7 16.625L9.625 14L7 11.375Z" />
                </svg>
              </span>
            </div>
            Resources
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("account")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "account" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_758_9)">
                    <path d="M9.5 11C12.4984 11 14.9286 8.53789 14.9286 5.5C14.9286 2.46211 12.4984 0 9.5 0C6.50156 0 4.07143 2.46211 4.07143 5.5C4.07143 8.53789 6.50156 11 9.5 11ZM13.3 12.375H12.5917C11.6502 12.8133 10.6027 13.0625 9.5 13.0625C8.39732 13.0625 7.35402 12.8133 6.40826 12.375H5.7C2.55312 12.375 0 14.9617 0 18.15V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V18.15C19 14.9617 16.4469 12.375 13.3 12.375Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_758_9">
                      <rect width="20" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>{" "}
            My Account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
