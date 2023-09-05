import React, { useState } from "react";
import { adminLogin } from "../redux/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const [showPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: async () => {
      navigate("/dashboard", { replace: true });
      const body = {
        email_id: formik?.values?.email,
        password: formik?.values?.password,
      };
      // const res = await dispatch(adminLogin(body));
      // if (res?.status == 200 || res?.success == true) {
      //   toast.success(res?.message);
      //   navigate("/dashboard", { replace: true });
      // } else {
      //   toast.error(res?.message);
      // }
    },
  });
  return (
    // MAIN DIV
    <div className="login-section vw-100 vh-100 d-flex align-items-start justify-content-center">
      <div className="login-box pt-5 mt-2">
        <div className="login-img text-center pb-5">
          <img src="/images/logo.png" alt="logo" />
        </div>
        {/* INNER-BOX */}
        <div className="login-inner-box rounded-4 p-4 py-5 mx-3 p-sm-5">
          <h2 className="fw-600 text-center pb-4">Login your Account</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <div className="input-box mb-4 position-relative">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email Address"
                  className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.email && formik.errors.email
                    ? "error-border"
                    : ""
                    }`}
                />
                <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="15"
                    viewBox="0 0 25 21"
                    fill="var(--d-grey)"
                  >
                    <path d="M22.5 20.5791H2.5C1.83696 20.5791 1.20107 20.3157 0.732233 19.8469C0.263392 19.378 0 18.7421 0 18.0791V2.97035C0.0280408 2.32634 0.303761 1.71805 0.769598 1.27248C1.23543 0.826905 1.85538 0.578493 2.5 0.579103H22.5C23.163 0.579103 23.7989 0.842495 24.2678 1.31134C24.7366 1.78018 25 2.41606 25 3.0791V18.0791C25 18.7421 24.7366 19.378 24.2678 19.8469C23.7989 20.3157 23.163 20.5791 22.5 20.5791ZM2.5 5.4141V18.0791H22.5V5.4141L12.5 12.0791L2.5 5.4141ZM3.5 3.0791L12.5 9.0791L21.5 3.0791H3.5Z" />
                  </svg>
                </span>
                {formik.touched.email && formik.errors.email && (
                  <span className="text-danger fs-6">
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="input-box mb-4 position-relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.password && formik.errors.password
                    ? "error-border"
                    : ""
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="border-0 pass-btn rounded-pill bg-transparent pe-3"
                >
                  {showPass ? (
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
                {formik.touched.password && formik.errors.password && (
                  <span className="text-danger fs-6">
                    {formik.errors.password}
                  </span>
                )}
              </div>
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="login-btn white-text fw-600 w-100  rounded-pill mt-4 border-0"
            >
              Login

            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
