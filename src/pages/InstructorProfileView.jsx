import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { TeacherChangePassword, getOneTeacher } from "../redux/services/otherServices/Teacher";
import { useDispatch } from "react-redux";
import * as url from '../constants/urls'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { toast } from "react-toastify";

export default function InstructorProfileView() {
  const navigate = useNavigate()
  const [sidebarActive, setSidebarActive] = useState("instructors");
  const [showPassInstructors, setShowPassInstructors] = useState(false)
  const [showConPassInstructors, setShowConPassInstructors] = useState(false)
  const [showNewPassInstructors, setShowNewPassInstructors] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation();
  const data = location.state;
  const [instructorData, setInstructorData] = useState({})
  useEffect(() => {
    getInstructorProfile();
  }, []);
  const getInstructorProfile = async () => {
    const body = {
      teacher_id: data
    }
    const res = await dispatch(getOneTeacher(body));
    if (res?.status == 200) {
      setInstructorData(res?.data)
    }
  }
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPass: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Password is required"),
      newPassword: Yup.string().required(" New Password is required"),
      confirmPass: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async () => {

      const body = {
        current_password: formik?.values?.oldPassword,
        new_password: formik?.values?.newPassword,
        confirm_password: formik?.values?.confirmPass,
        teacher_id: data,
      };
      document.getElementById("closeAddModal").click()
      // const res = await dispatch(TeacherChangePassword(body));
      // if (res?.status == 200 || res?.success == true) {
      //   toast?.success(res?.message)
      //   document.getElementById("closeAddModal").click()
      //   formik.setFieldValue('oldPassword', '');
      //   formik.setFieldValue('newPassword', '')
      //   formik.setFieldValue('confirmPass', '')

      // }
      // else {
      //   toast?.error(res?.message)
      // }

      formik.setSubmitting(false)
    }
  })
  return (
    <>
      <div className="instructor-profile-view-main-page">
        <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
          <div className="instructor-profile-view">
            <div className="instructor-heading-box p-3 rounded-2 d-flex justify-content-between flex-column gap-2 flex-sm-row gap-sm-0">
              <div className="instructor-heading">
                <span className="fw-600">Instructors / </span>Teresa
              </div>
              <button onClick={() => navigate(-1)} className="border-0 bg-transparent text-start text-md-center">
                Back
              </button>
            </div>
            <div className="profile-box p-3 mt-3 rounded-3">
              <div className="profile-heading-box mb-4 d-flex justify-content-between align-items-center flex-column gap-2 flex-sm-row gap-sm-0">
                <div className="profile-heading fw-600">Personal Info</div>
                <div className="active-since d-flex gap-2 align-items-center ">
                  <span className="p-1 px-3 rounded-3 fw-500">{instructorData?.status == 1 ? "Active" : "In-Active"}</span>
                  {instructorData?.last_seen || "N/A"}
                </div>
                <div className="change-password d-flex gap-3">
                  <button data-bs-toggle="modal"
                    data-bs-target="#changepassword" className="border-0 bg-transparent">
                    Change Password
                  </button>
                  <button className="border-0 p-1 rounded-3 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 23"
                      fill="none"
                    >
                      <path
                        d="M13.75 3.83366V1.91699M13.75 3.83366V5.75033M13.75 3.83366H9.625M2.75 9.58366V18.2087C2.75 18.717 2.94315 19.2045 3.28697 19.5639C3.63079 19.9234 4.0971 20.1253 4.58333 20.1253H17.4167C17.9029 20.1253 18.3692 19.9234 18.713 19.5639C19.0568 19.2045 19.25 18.717 19.25 18.2087V9.58366M2.75 9.58366H19.25M2.75 9.58366V5.75033C2.75 5.24199 2.94315 4.75448 3.28697 4.39504C3.63079 4.03559 4.0971 3.83366 4.58333 3.83366H6.41667M19.25 9.58366V5.75033C19.25 5.24199 19.0568 4.75448 18.713 4.39504C18.3692 4.03559 17.9029 3.83366 17.4167 3.83366H16.9583M6.41667 1.91699V5.75033"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="border-0 p-1 rounded-3 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18 "
                      height="18  "
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7180_27355)">
                        <path
                          d="M9.1665 3.33398H3.33317C2.89114 3.33398 2.46722 3.50958 2.15466 3.82214C1.8421 4.1347 1.6665 4.55862 1.6665 5.00065V16.6673C1.6665 17.1093 1.8421 17.5333 2.15466 17.8458C2.46722 18.1584 2.89114 18.334 3.33317 18.334H14.9998C15.4419 18.334 15.8658 18.1584 16.1783 17.8458C16.4909 17.5333 16.6665 17.1093 16.6665 16.6673V10.834"
                          stroke="black"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.4165 2.08417C15.748 1.75265 16.1977 1.56641 16.6665 1.56641C17.1353 1.56641 17.585 1.75265 17.9165 2.08417C18.248 2.41569 18.4343 2.86533 18.4343 3.33417C18.4343 3.80301 18.248 4.25265 17.9165 4.58417L9.99984 12.5008L6.6665 13.3342L7.49984 10.0008L15.4165 2.08417Z"
                          stroke="black"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7180_27355">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="profile-data d-flex gap-5 flex-column flex-sm-row">
                <div className="profile-img-data">
                  <img
                    width={200}
                    height={200}
                    src={instructorData?.teacher_img ? url?.BASE_URL + instructorData?.teacher_img : "images/profile.png"}
                    alt="profile-img"
                  />
                </div>
                <div className="profile-name-box d-flex flex-column gap-3 ">
                  <p>
                    {" "}
                    <span className="fw-600">Name:</span>
                    {instructorData?.first_name + " " + instructorData?.last_name || "N/A"}
                  </p>
                  <p>
                    {" "}
                    <span className="fw-600">Mobile No:</span>
                    {instructorData?.dailcode + " " + instructorData?.phone || "N/A"}
                  </p>
                  <p>
                    {" "}
                    <span className="fw-600">Email ID:</span>
                    {instructorData?.email_id || "N/A"}
                  </p>
                  <p>
                    {" "}
                    <span className="fw-600">User Code:</span>
                    {instructorData?.user_code || "N/A"}
                  </p>
                </div>
              </div>
              <div className="profile-bottom-data d-flex flex-column gap-4 py-3">
                <p>
                  {" "}
                  <span className="fw-600">Address:</span>
                  <span> {instructorData?.address || "N/A"}</span>
                </p>
                <p>
                  {" "}
                  <span className="fw-600">
                    Language <br /> Spoken:
                  </span>
                  <span> {instructorData?.lang || "N/A"}</span>
                </p>

                <p>
                  {" "}
                  <span className="fw-600">About Us:</span>
                  <span>
                    {instructorData?.about || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div
        class="modal add-instructors-modal fade"
        id="changepassword"
        tabindex="-1"
        aria-labelledby="changepasswordLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content rounded-4">
            <div class="modal-body">
              <div className="heading position-relative pt-3">
                <h3 className="text-center fw-600">Change Password</h3>
                <button
                  id="closeAddModal"
                  className="border-0 bg-transparent"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img
                    width={25}
                    src="/images/close-icon.png"
                    alt="close-icon"

                  />
                </button>
              </div>
              <form onSubmit={formik.handleSubmit} className="p-5">
                <div className="input-box mb-4 position-relative">
                  <input
                    type={showPassInstructors ? "text" : "password"}
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="oldPassword"
                    placeholder="password"
                    className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.oldPassword && formik.errors.oldPassword ? "border-danger" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassInstructors(!showPassInstructors)
                    }
                    className="border-0 pass-btn rounded-pill bg-transparent pe-3"
                  >
                    {showPassInstructors ? (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 28 21"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M14 0.207031C17.4667 0.207031 20.4242 1.88103 22.6327 3.71366C24.8552 5.55472 26.46 7.67084 27.2475 8.81497C27.5582 9.26417 27.7241 9.79205 27.7241 10.332C27.7241 10.872 27.5582 11.3999 27.2475 11.8491C26.46 12.9932 24.8552 15.1093 22.6327 16.9504C20.4225 18.783 17.4667 20.457 14 20.457C10.5332 20.457 7.57572 18.783 5.36722 16.9504C3.14472 15.1077 1.53997 12.9915 0.752466 11.8474C0.441714 11.3982 0.275879 10.8703 0.275879 10.3303C0.275879 9.79037 0.441714 9.26248 0.752466 8.81328C1.53997 7.67084 3.14472 5.55472 5.36722 3.71366C7.57747 1.88103 10.5332 0.207031 14 0.207031ZM2.93822 10.2173C2.91414 10.251 2.90125 10.2911 2.90125 10.332C2.90125 10.373 2.91414 10.413 2.93822 10.4468C3.65747 11.4964 5.10997 13.3999 7.07872 15.0317C9.05797 16.6737 11.4222 17.9258 14 17.9258C16.5777 17.9258 18.9437 16.6737 20.9212 15.0317C22.8882 13.3999 24.3407 11.4947 25.0617 10.4468C25.0858 10.413 25.0987 10.373 25.0987 10.332C25.0987 10.2911 25.0858 10.251 25.0617 10.2173C24.3407 9.16934 22.8882 7.26416 20.9212 5.63234C18.942 3.99041 16.5777 2.73828 14 2.73828C11.4222 2.73828 9.05622 3.99041 7.07872 5.63234C5.11172 7.26416 3.65922 9.16934 2.93822 10.2173ZM14 13.707C13.5339 13.7172 13.0704 13.6375 12.6367 13.4725C12.203 13.3076 11.8078 13.0607 11.4744 12.7465C11.141 12.4323 10.8761 12.057 10.6951 11.6426C10.5142 11.2283 10.421 10.7833 10.4208 10.3337C10.4207 9.88418 10.5137 9.43912 10.6945 9.02471C10.8752 8.61029 11.1399 8.23486 11.4732 7.92047C11.8064 7.60607 12.2014 7.35905 12.635 7.19389C13.0687 7.02874 13.5321 6.94878 13.9982 6.95872C14.9127 6.97822 15.7829 7.34216 16.4226 7.97263C17.0623 8.60311 17.4206 9.45001 17.4208 10.3321C17.4211 11.2141 17.0632 12.0612 16.4238 12.6919C15.7845 13.3227 14.9144 13.6871 14 13.707Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 34 35"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M28.2909 30.8746L23.5365 26.1203C21.4854 27.0542 19.2537 27.5248 17 27.4987C14.6765 27.5276 12.3771 27.0261 10.2765 26.0324C8.64834 25.238 7.18628 24.1409 5.96846 22.7996C4.67574 21.4139 3.65971 19.7939 2.97504 18.0269L2.83337 17.582L2.98212 17.1344C4.0061 14.5224 5.7294 12.2428 7.96312 10.5454L4.25004 6.83236L6.25179 4.83203L30.2912 28.8714L28.2937 30.8746H28.2909ZM9.96771 12.5514C8.1571 13.8207 6.7273 15.56 5.83246 17.582C7.75122 22.009 12.1775 24.8165 17 24.6654C18.4873 24.6775 19.9659 24.4381 21.3733 23.957L18.8233 21.407C18.2557 21.6853 17.6322 21.8306 17 21.832C14.6589 21.8173 12.7647 19.9231 12.75 17.582C12.7507 16.9485 12.8961 16.3234 13.175 15.7545L9.96771 12.5514ZM28.1237 22.6962L26.1517 20.7256C26.9813 19.7877 27.6613 18.7273 28.1676 17.582C26.2514 13.1529 21.8234 10.3444 17 10.4987C16.6501 10.4987 16.2988 10.5114 15.9588 10.5355L13.4584 8.03228C14.6223 7.78328 15.8097 7.66027 17 7.66536C19.3235 7.63653 21.623 8.138 23.7235 9.13161C25.3518 9.92599 26.8138 11.0231 28.0316 12.3644C29.3237 13.7485 30.3397 15.3665 31.025 17.1315L31.1667 17.582L31.018 18.0297C30.3547 19.7553 29.3734 21.3411 28.1251 22.7047L28.1237 22.6962Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                  {formik.touched.oldPassword && formik.errors.oldPassword && (
                    <span className="text-danger fs-6">{formik.errors.oldPassword}</span>
                  )}

                </div>
                <div className="input-box mb-4 position-relative">
                  <input
                    type={showNewPassInstructors ? "text" : "password"}
                    placeholder=" New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    name="newPassword"
                    className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.newPassword && formik.errors.newPassword ? "border-danger" : ""}`}

                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowNewPassInstructors(!showNewPassInstructors)
                    }
                    className="border-0 pass-btn rounded-pill bg-transparent pe-3"
                  >
                    {showNewPassInstructors ? (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 28 21"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M14 0.207031C17.4667 0.207031 20.4242 1.88103 22.6327 3.71366C24.8552 5.55472 26.46 7.67084 27.2475 8.81497C27.5582 9.26417 27.7241 9.79205 27.7241 10.332C27.7241 10.872 27.5582 11.3999 27.2475 11.8491C26.46 12.9932 24.8552 15.1093 22.6327 16.9504C20.4225 18.783 17.4667 20.457 14 20.457C10.5332 20.457 7.57572 18.783 5.36722 16.9504C3.14472 15.1077 1.53997 12.9915 0.752466 11.8474C0.441714 11.3982 0.275879 10.8703 0.275879 10.3303C0.275879 9.79037 0.441714 9.26248 0.752466 8.81328C1.53997 7.67084 3.14472 5.55472 5.36722 3.71366C7.57747 1.88103 10.5332 0.207031 14 0.207031ZM2.93822 10.2173C2.91414 10.251 2.90125 10.2911 2.90125 10.332C2.90125 10.373 2.91414 10.413 2.93822 10.4468C3.65747 11.4964 5.10997 13.3999 7.07872 15.0317C9.05797 16.6737 11.4222 17.9258 14 17.9258C16.5777 17.9258 18.9437 16.6737 20.9212 15.0317C22.8882 13.3999 24.3407 11.4947 25.0617 10.4468C25.0858 10.413 25.0987 10.373 25.0987 10.332C25.0987 10.2911 25.0858 10.251 25.0617 10.2173C24.3407 9.16934 22.8882 7.26416 20.9212 5.63234C18.942 3.99041 16.5777 2.73828 14 2.73828C11.4222 2.73828 9.05622 3.99041 7.07872 5.63234C5.11172 7.26416 3.65922 9.16934 2.93822 10.2173ZM14 13.707C13.5339 13.7172 13.0704 13.6375 12.6367 13.4725C12.203 13.3076 11.8078 13.0607 11.4744 12.7465C11.141 12.4323 10.8761 12.057 10.6951 11.6426C10.5142 11.2283 10.421 10.7833 10.4208 10.3337C10.4207 9.88418 10.5137 9.43912 10.6945 9.02471C10.8752 8.61029 11.1399 8.23486 11.4732 7.92047C11.8064 7.60607 12.2014 7.35905 12.635 7.19389C13.0687 7.02874 13.5321 6.94878 13.9982 6.95872C14.9127 6.97822 15.7829 7.34216 16.4226 7.97263C17.0623 8.60311 17.4206 9.45001 17.4208 10.3321C17.4211 11.2141 17.0632 12.0612 16.4238 12.6919C15.7845 13.3227 14.9144 13.6871 14 13.707Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 34 35"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M28.2909 30.8746L23.5365 26.1203C21.4854 27.0542 19.2537 27.5248 17 27.4987C14.6765 27.5276 12.3771 27.0261 10.2765 26.0324C8.64834 25.238 7.18628 24.1409 5.96846 22.7996C4.67574 21.4139 3.65971 19.7939 2.97504 18.0269L2.83337 17.582L2.98212 17.1344C4.0061 14.5224 5.7294 12.2428 7.96312 10.5454L4.25004 6.83236L6.25179 4.83203L30.2912 28.8714L28.2937 30.8746H28.2909ZM9.96771 12.5514C8.1571 13.8207 6.7273 15.56 5.83246 17.582C7.75122 22.009 12.1775 24.8165 17 24.6654C18.4873 24.6775 19.9659 24.4381 21.3733 23.957L18.8233 21.407C18.2557 21.6853 17.6322 21.8306 17 21.832C14.6589 21.8173 12.7647 19.9231 12.75 17.582C12.7507 16.9485 12.8961 16.3234 13.175 15.7545L9.96771 12.5514ZM28.1237 22.6962L26.1517 20.7256C26.9813 19.7877 27.6613 18.7273 28.1676 17.582C26.2514 13.1529 21.8234 10.3444 17 10.4987C16.6501 10.4987 16.2988 10.5114 15.9588 10.5355L13.4584 8.03228C14.6223 7.78328 15.8097 7.66027 17 7.66536C19.3235 7.63653 21.623 8.138 23.7235 9.13161C25.3518 9.92599 26.8138 11.0231 28.0316 12.3644C29.3237 13.7485 30.3397 15.3665 31.025 17.1315L31.1667 17.582L31.018 18.0297C30.3547 19.7553 29.3734 21.3411 28.1251 22.7047L28.1237 22.6962Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                  {formik.touched.newPassword && formik.errors.newPassword && (
                    <span className="text-danger fs-6">{formik.errors.newPassword}</span>
                  )}
                </div>
                <div className="input-box mb-4 position-relative">
                  <input
                    type={showConPassInstructors ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPass}
                    name="confirmPass"
                    className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.confirmPass && formik.errors.confirmPass ? "border-danger" : ""}`}

                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConPassInstructors(!showConPassInstructors)
                    }
                    className="border-0 pass-btn rounded-pill bg-transparent pe-3"
                  >
                    {showConPassInstructors ? (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 28 21"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M14 0.207031C17.4667 0.207031 20.4242 1.88103 22.6327 3.71366C24.8552 5.55472 26.46 7.67084 27.2475 8.81497C27.5582 9.26417 27.7241 9.79205 27.7241 10.332C27.7241 10.872 27.5582 11.3999 27.2475 11.8491C26.46 12.9932 24.8552 15.1093 22.6327 16.9504C20.4225 18.783 17.4667 20.457 14 20.457C10.5332 20.457 7.57572 18.783 5.36722 16.9504C3.14472 15.1077 1.53997 12.9915 0.752466 11.8474C0.441714 11.3982 0.275879 10.8703 0.275879 10.3303C0.275879 9.79037 0.441714 9.26248 0.752466 8.81328C1.53997 7.67084 3.14472 5.55472 5.36722 3.71366C7.57747 1.88103 10.5332 0.207031 14 0.207031ZM2.93822 10.2173C2.91414 10.251 2.90125 10.2911 2.90125 10.332C2.90125 10.373 2.91414 10.413 2.93822 10.4468C3.65747 11.4964 5.10997 13.3999 7.07872 15.0317C9.05797 16.6737 11.4222 17.9258 14 17.9258C16.5777 17.9258 18.9437 16.6737 20.9212 15.0317C22.8882 13.3999 24.3407 11.4947 25.0617 10.4468C25.0858 10.413 25.0987 10.373 25.0987 10.332C25.0987 10.2911 25.0858 10.251 25.0617 10.2173C24.3407 9.16934 22.8882 7.26416 20.9212 5.63234C18.942 3.99041 16.5777 2.73828 14 2.73828C11.4222 2.73828 9.05622 3.99041 7.07872 5.63234C5.11172 7.26416 3.65922 9.16934 2.93822 10.2173ZM14 13.707C13.5339 13.7172 13.0704 13.6375 12.6367 13.4725C12.203 13.3076 11.8078 13.0607 11.4744 12.7465C11.141 12.4323 10.8761 12.057 10.6951 11.6426C10.5142 11.2283 10.421 10.7833 10.4208 10.3337C10.4207 9.88418 10.5137 9.43912 10.6945 9.02471C10.8752 8.61029 11.1399 8.23486 11.4732 7.92047C11.8064 7.60607 12.2014 7.35905 12.635 7.19389C13.0687 7.02874 13.5321 6.94878 13.9982 6.95872C14.9127 6.97822 15.7829 7.34216 16.4226 7.97263C17.0623 8.60311 17.4206 9.45001 17.4208 10.3321C17.4211 11.2141 17.0632 12.0612 16.4238 12.6919C15.7845 13.3227 14.9144 13.6871 14 13.707Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 34 35"
                          fill="var(--d-grey)"
                        >
                          <path
                            d="M28.2909 30.8746L23.5365 26.1203C21.4854 27.0542 19.2537 27.5248 17 27.4987C14.6765 27.5276 12.3771 27.0261 10.2765 26.0324C8.64834 25.238 7.18628 24.1409 5.96846 22.7996C4.67574 21.4139 3.65971 19.7939 2.97504 18.0269L2.83337 17.582L2.98212 17.1344C4.0061 14.5224 5.7294 12.2428 7.96312 10.5454L4.25004 6.83236L6.25179 4.83203L30.2912 28.8714L28.2937 30.8746H28.2909ZM9.96771 12.5514C8.1571 13.8207 6.7273 15.56 5.83246 17.582C7.75122 22.009 12.1775 24.8165 17 24.6654C18.4873 24.6775 19.9659 24.4381 21.3733 23.957L18.8233 21.407C18.2557 21.6853 17.6322 21.8306 17 21.832C14.6589 21.8173 12.7647 19.9231 12.75 17.582C12.7507 16.9485 12.8961 16.3234 13.175 15.7545L9.96771 12.5514ZM28.1237 22.6962L26.1517 20.7256C26.9813 19.7877 27.6613 18.7273 28.1676 17.582C26.2514 13.1529 21.8234 10.3444 17 10.4987C16.6501 10.4987 16.2988 10.5114 15.9588 10.5355L13.4584 8.03228C14.6223 7.78328 15.8097 7.66027 17 7.66536C19.3235 7.63653 21.623 8.138 23.7235 9.13161C25.3518 9.92599 26.8138 11.0231 28.0316 12.3644C29.3237 13.7485 30.3397 15.3665 31.025 17.1315L31.1667 17.582L31.018 18.0297C30.3547 19.7553 29.3734 21.3411 28.1251 22.7047L28.1237 22.6962Z"
                            fill="#787A8D"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                  {formik.touched.confirmPass && formik.errors.confirmPass && (
                    <span className="text-danger fs-6">{formik.errors.confirmPass}</span>
                  )}
                </div>
                <button
                  disabled={formik.isSubmitting} type="submit" className="add-btn border-0 w-100 rounded-pill py-2 white-text fw-600">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
