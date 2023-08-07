import React, { useState } from "react";
import Layout from "../layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import * as Yup from 'yup'
import * as url from '../constants/urls'
import { toast } from "react-toastify";

export default function InstructorProfile() {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState("my-account");
  const [showPassInstructors, setShowPassInstructors] = useState(false);
  const [showConPassInstructors, setShowConPassInstructors] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [phoneNo, setPhoneNo] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    getInstructorProfile();
  }, []);
  const getInstructorProfile = async () => {
    const res = await dispatch(TeacherProfile());
    if (res?.status == 200 || res?.success) {
      setProfileData(res?.data);
      setDialCode(res?.data?.dailcode || "");
      setPhoneNo(res?.data?.phone || "");
      setImage(
        res?.data?.teacher_img ? url?.BASE_URL + res?.data?.teacher_img : ""
      );
      setImageUri(
        res?.data?.teacher_img ? url?.BASE_URL + res?.data?.teacher_img : ""
      );
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: profileData?.first_name || "",
      lastName: profileData?.last_name || "",
      email: profileData?.email_id || "",
      usercode: profileData?.user_code || "",
      address: profileData?.address || "",
      city: profileData?.city || "",
      country: profileData?.country || "",
      pincode: profileData?.pincode || "",
      info: profileData?.about || "",
      experi: profileData?.lang || "",
      // phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email().required("Email is required"),
      usercode: Yup.string().required("User Code is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("city is required"),
      country: Yup.string().required("Country is required"),
      pincode: Yup.string().required("Pincode is required"),
      experi: Yup.string().required("Languages are required"),
      // phone: Yup.number()
      //   .typeError("Must be a valid number")
      //   .positive("Must be a valid number")
      //   .integer("Must be a valid number")
      //   .min(8)
      //   .required("Phone number is required")
      //   .label("Phone number"),
      info: Yup.string(),
    }),
    onSubmit: async () => {
      const formData = new FormData();
      formData?.append("first_name", formik?.values?.firstName);
      formData?.append("last_name", formik?.values?.lastName);
      formData?.append("email_id", formik?.values?.email);
      formData?.append("user_code", formik?.values?.usercode);
      formData?.append("phone", phoneNo);
      formData?.append("dailcode", dialCode);
      formData?.append("lang", formik?.values?.experi);
      formData?.append("pincode", formik?.values?.pincode);
      formData?.append("address", formik?.values?.address);
      formData?.append("city", formik?.values?.city);
      formData?.append("country", formik?.values?.country);
      formData?.append("about", formik?.values?.info);
      formData?.append("teacher_img", imageUri);
      const res = await dispatch(updateTeacherProfile(formData));
      if (res?.status == 200 || res?.success == true) {
        toast.success(res?.message);
        getInstructorProfile();
      }
    },
  });
  const handleChangePhone = (phone, country) => {
    setDialCode(country?.dialCode);
    setPhoneNo(phone?.replace(country.dialCode, ""));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file.type.includes("image")) {
      setImageUri(file);
      setImage(URL.createObjectURL(file));
    } else {
      setShowAlert(true);
      setAlertType(0);
      setAlertMessage("You can only upload images for this field");
    }
  };
  return (
    <div>
      <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
        <form onSubmit={formik?.handleSubmit}>
          <div className="my-account p-4 rounded-2">
            <h2 className="fw-600 pb-4">General</h2>
            <div className="row pb-5">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        disabled
                        id="firstName"
                        placeholder="First Name"
                        className={`ps-2 rounded-1 p-2 ${
                          formik.touched.firstName && formik.errors.firstName
                            ? "border-danger"
                            : ""
                        }`}
                        type="text"
                        onChange={formik?.handleChange}
                        onBlur={formik?.onBlur}
                        value={formik?.values?.firstName}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <span className="text-danger fs-6">
                          {formik.errors.firstName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        disabled
                        id="lastName"
                        placeholder="Last Name"
                        className={`ps-2 rounded-1 p-2 ${
                          formik.touched.lastName && formik.errors.lastName
                            ? "border-danger"
                            : ""
                        }`}
                        type="text"
                        onChange={formik?.handleChange}
                        onBlur={formik?.onBlur}
                        value={formik?.values?.lastName}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <span className="text-danger fs-6">
                          {formik.errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="email">
                        Email ID
                      </label>
                      <input
                        disabled
                        id="email"
                        placeholder="Email ID"
                        className={`ps-2 rounded-1 p-2 ${
                          formik.touched.email && formik.errors.email
                            ? "border-danger"
                            : ""
                        }`}
                        type="email"
                        onChange={formik?.handleChange}
                        onBlur={formik?.onBlur}
                        value={formik?.values?.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <span className="text-danger fs-6">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="mobile">
                        Mobile Number
                      </label>
                      <PhoneInput
                        placeholder="Mobile Number"
                        className="mobile-input"
                        // className={`mobile-input ${formik.touched.phone && formik.errors.phone ? "mobile-error" : ""}`}
                        country={"us"}
                        value={dialCode + phoneNo}
                        enableSearch={true}
                        onChange={(phone, country) =>
                          handleChangePhone(phone, country)
                        }
                      />
                      {/* {formik.touched.phone && formik.errors.phone && (
                        <span className="text-danger fs-6">{formik.errors.phone}</span>
                      )} */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="experi">
                        Languages spoken
                      </label>
                      <input
                        id="experi"
                        placeholder="Language"
                        className={`ps-2 rounded-1 p-2 ${
                          formik.touched.experi && formik.errors.experi
                            ? "border-danger"
                            : ""
                        }`}
                        type="text"
                        onChange={formik?.handleChange}
                        onBlur={formik?.onBlur}
                        value={formik?.values?.experi}
                      />
                      {formik.touched.experi && formik.errors.experi && (
                        <span className="text-danger fs-6">
                          {formik.errors.experi}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="usercode">
                        Usercode
                      </label>
                      <input
                        disabled
                        id="usercode"
                        placeholder="usercode"
                        className={`ps-2 rounded-1 p-2 ${
                          formik.touched.usercode && formik.errors.usercode
                            ? "border-danger"
                            : ""
                        }`}
                        type="text"
                        onChange={formik?.handleChange}
                        onBlur={formik?.onBlur}
                        value={formik?.values?.usercode}
                      />
                      {formik.touched.usercode && formik.errors.usercode && (
                        <span className="text-danger fs-6">
                          {formik.errors.usercode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="profile-image-box">
                  <p className="pb-1 text-nowrap">
                    Profile Update
                    <div class="tooltip2 ms-1">
                      <img src="/images/svg/info-icon.svg" alt="info" />
                      <span class="tooltiptext">Upload image upto 2 mb</span>
                    </div>
                  </p>
                  <div className="profile-img">
                    <img
                      src={image ? image : "/images/svg/profile.svg"}
                      className="img-fluid rounded-1 w-100"
                      alt="profile-img"
                    />
                  </div>
                  <label
                    className="images-upload py-2 w-100 rounded-1 text-nowrap text-center cursor-pointer"
                    htmlFor="image-upload"
                  >
                    Change Image
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    hidden
                    onChange={handleImageChange}
                    inputProps={{
                      accept: "image/*",
                    }}
                  />
                </div>
              </div>
            </div>
            <h2 className="fw-600 pb-4">Other Information</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="pincode">
                    Pin code / Zip code
                  </label>
                  <input
                    id="pincode"
                    placeholder="Pin code / Zip code"
                    className={`ps-2 rounded-1 p-2 ${
                      formik.touched.pincode && formik.errors.pincode
                        ? "border-danger"
                        : ""
                    }`}
                    onChange={formik?.handleChange}
                    onBlur={formik?.onBlur}
                    value={formik?.values?.pincode}
                    type="number"
                  />
                  {formik.touched.pincode && formik.errors.pincode && (
                    <span className="text-danger fs-6">
                      {formik.errors.pincode}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    placeholder="Address"
                    className={`ps-2 rounded-1 p-2 ${
                      formik.touched.address && formik.errors.address
                        ? "border-danger"
                        : ""
                    }`}
                    type="text"
                    onChange={formik?.handleChange}
                    onBlur={formik?.onBlur}
                    value={formik?.values?.address}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <span className="text-danger fs-6">
                      {formik.errors.address}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    placeholder="City"
                    className={`ps-2 rounded-1 p-2 ${
                      formik.touched.city && formik.errors.city
                        ? "border-danger"
                        : ""
                    }`}
                    onChange={formik?.handleChange}
                    onBlur={formik?.onBlur}
                    value={formik?.values?.city}
                    type="text"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <span className="text-danger fs-6">
                      {formik.errors.city}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="country">
                    Country
                  </label>
                  <input
                    id="country"
                    placeholder="Country"
                    className={`ps-2 rounded-1 p-2 ${
                      formik.touched.country && formik.errors.country
                        ? "border-danger"
                        : ""
                    }`}
                    onChange={formik?.handleChange}
                    onBlur={formik?.onBlur}
                    value={formik?.values?.country}
                    type="text"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <span className="text-danger fs-6">
                      {formik.errors.country}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-3" htmlFor="info">
                    About Info{" "}
                    <div class="tooltip1 ms-1">
                      <img src="/images/svg/info-icon.svg" alt="info" />
                      <span class="tooltiptext">Minimum words 200</span>
                    </div>
                  </label>

                  <textarea
                    value={formik?.values?.info}
                    class="ps-2 rounded-1 p-2"
                    id="info"
                    placeholder="Tell us bit about yourself and help brands get to know you.."
                    rows="4"
                    onChange={formik?.handleChange}
                    onBlur={formik?.onBlur}
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="border-0 p-2 px-5 save-btn white-text"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Layout>
    </div>
  );
}
