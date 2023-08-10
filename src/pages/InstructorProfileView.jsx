import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { useLocation } from "react-router-dom";
import { getOneTeacher } from "../redux/services/otherServices/Teacher";
import { useDispatch } from "react-redux";
import * as url from '../constants/urls'

export default function InstructorProfileView() {
  const [sidebarActive, setSidebarActive] = useState("instructors");
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
  return (
    <div className="instructor-profile-view-main-page">
      <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
        <div className="instructor-profile-view">
          <div className="instructor-heading-box p-3 rounded-2 d-flex justify-content-between flex-column gap-2 flex-sm-row gap-sm-0">
            <div className="instructor-heading">
              <span className="fw-600">Instructors / </span>Teresa
            </div>
            <button className="border-0 bg-transparent text-start text-md-center">
              Back
            </button>
          </div>
          <div className="profile-box p-3 mt-3 rounded-3">
            <div className="profile-heading-box mb-4 d-flex justify-content-between align-items-center flex-column gap-2 flex-sm-row gap-sm-0">
              <div className="profile-heading fw-600">Personal Info</div>
              <div className="active-since d-flex gap-2 align-items-center ">
                <span className="p-1 px-3 rounded-3 fw-500"> Active</span>
                Last 28 days
              </div>
              <div className="change-password d-flex gap-3">
                <button className="border-0 bg-transparent">
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
  );
}
