import React, { useState } from "react";
import Layout from "../layout/layout";
// import Chart from "../components/chart";

export default function Dashboard() {
  const [sidebarActive, setSidebarActive] = useState("dashboard");
  return (
    <div>
      <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
        <div className="today-schedule-box rounded-2 p-2">
          {/* <div className="row p-2 gap-3 gap-xl-0">
            <div className="col-xl-6">
              <div className="today-schedule h-100 rounded-4 py-2 px-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                <div className="today-img">
                  <img width={50} src="/images/today-img.png" alt="today-img" />
                </div>
                <div className="total position-relative d-flex align-items-center justify-content-center justify-content-sm-start gap-3 py-1 w-100 ">
                  <div className="total-data text-center text-sm-start">
                    <p className="">Total Today’s Schedule</p>
                    <h4 className="fw-600">203</h4>
                  </div>
                </div>
                <div className="upcoming w-100 d-flex flex-column align-items-center py-1">
                  <div className="upcoming-inner text-center text-sm-start">
                    <p className="">Upcoming Schedule</p>
                    <h4 className="fw-600">546</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="resource-schedule h-100 rounded-4 px-3 py-2 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                <div className="resource-img">
                  <img
                    width={50}
                    src="/images/resource-img.png"
                    alt="resource-img"
                  />
                </div>
                <div className="resource position-relative d-flex align-items-center justify-content-center justify-content-sm-start gap-3 py-1 w-100 ">
                  <div className="resource-data text-center text-sm-start">
                    <p className="">Resources</p>
                    <h4 className="fw-600">620,242</h4>
                  </div>
                </div>
                <div className="resource-items-box w-100 d-flex flex-wrap py-1">
                  <div className="resource-item d-flex align-items-center flex-xl-column flex-xxl-row justify-content-center gap-3 w-50 pb-2">
                    <img
                      width={30}
                      src="/images/resource-1.png"
                      alt="resource"
                    />
                    <h4 className="fw-600">5461</h4>
                  </div>
                  <div className="resource-item d-flex align-items-center flex-xl-column flex-xxl-row justify-content-center gap-3 w-50 pb-2">
                    <img
                      width={30}
                      src="/images/resource-2.png"
                      alt="resource"
                    />
                    <h4 className="fw-600">5461</h4>
                  </div>
                  <div className="resource-item d-flex align-items-center flex-xl-column flex-xxl-row justify-content-center gap-3 w-50 pb-2">
                    <img
                      width={30}
                      src="/images/resource-3.png"
                      alt="resource"
                    />
                    <h4 className="fw-600">5461</h4>
                  </div>
                  <div className="resource-item d-flex align-items-center flex-xl-column flex-xxl-row justify-content-center gap-3 w-50 pb-2">
                    <img
                      width={30}
                      src="/images/resource-4.png"
                      alt="resource"
                    />
                    <h4 className="fw-600">5461</h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="graph-main-box my-3 ">
          {/* <div className="row gap-3 gap-sm-0">
            <div className="col-12 col-sm-7 col-lg-8">
              <div className="graph-box p-4 rounded-2 h-100">
                <div className="graph-heading d-flex justify-content-between align-items-center">
                  <p className="fw-600">Progress</p>
                  <select class="d-flex rounded-2 px-2 py-1 border-0">
                    <option selected>Year</option>
                    <option value="1">Month</option>
                    <option value="2">Day</option>
                  </select>
                </div>
                <div className="graph h-100">
                  <Chart />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-4">
              <div className="schedule p-4 rounded-2">
                <h3 className="schedule-heading fw-600 mb-2">
                  Today’s Schedule
                </h3>
                <div className="schedule-box py-3 overflow-y-auto">
                  <div className="schedule-item pb-4 d-flex flex-column flex-xxl-row pe-2 justify-content-xxl-between gap-3">
                    <div className="schedule-item-inner d-flex gap-2">
                      <div className="schedule-img d-flex align-items-center">
                        <img
                          width={60}
                          src="/images/schedule-img.png"
                          alt="schedule-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="schedule-item-data py-1 d-flex flex-column justify-content-between">
                        <div className="schedule-item-name fw-600">
                          Daniel Jordan
                        </div>
                        <div className="schedule-item-date">
                          04 Jan, 09:20AM
                        </div>
                      </div>
                    </div>
                    <div className="schedule-btn">
                      <button className="border-0 rounded-pill p-2 px-3 white-text">
                        Join Now
                      </button>
                    </div>
                  </div>
                  <div className="schedule-item pb-4 d-flex flex-column flex-xxl-row pe-2 gap-3 gap-xxl-0 justify-content-xxl-between">
                    <div className="schedule-item-inner d-flex gap-2">
                      <div className="schedule-img d-flex align-items-center">
                        <img
                          width={60}
                          src="/images/schedule-img.png"
                          alt="schedule-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="schedule-item-data py-1 d-flex flex-column justify-content-between">
                        <div className="schedule-item-name fw-600">
                          Daniel Jordan
                        </div>
                        <div className="schedule-item-date">
                          04 Jan, 09:20AM
                        </div>
                      </div>
                    </div>
                    <div className="schedule-btn">
                      <button className="border-0 rounded-pill p-2 px-3 white-text">
                        Join Now
                      </button>
                    </div>
                  </div>
                  <div className="schedule-item pb-4 d-flex flex-column flex-xxl-row pe-2 gap-3 gap-xxl-0 justify-content-xxl-between">
                    <div className="schedule-item-inner d-flex gap-2">
                      <div className="schedule-img d-flex align-items-center">
                        <img
                          width={60}
                          src="/images/schedule-img.png"
                          alt="schedule-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="schedule-item-data py-1 d-flex flex-column justify-content-between">
                        <div className="schedule-item-name fw-600">
                          Daniel Jordan
                        </div>
                        <div className="schedule-item-date">
                          04 Jan, 09:20AM
                        </div>
                      </div>
                    </div>
                    <div className="schedule-btn">
                      <button className="border-0 rounded-pill p-2 px-3 white-text">
                        Join Now
                      </button>
                    </div>
                  </div>
                  <div className="schedule-item pb-4 d-flex flex-column flex-xxl-row pe-2 gap-3 gap-xxl-0 justify-content-xxl-between">
                    <div className="schedule-item-inner d-flex gap-2">
                      <div className="schedule-img d-flex align-items-center">
                        <img
                          width={60}
                          src="/images/schedule-img.png"
                          alt="schedule-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="schedule-item-data py-1 d-flex flex-column justify-content-between">
                        <div className="schedule-item-name fw-600">
                          Daniel Jordan
                        </div>
                        <div className="schedule-item-date">
                          04 Jan, 09:20AM
                        </div>
                      </div>
                    </div>
                    <div className="schedule-btn">
                      <button className="border-0 rounded-pill p-2 px-3 white-text">
                        Join Now
                      </button>
                    </div>
                  </div>
                  <div className="schedule-item pb-4 d-flex flex-column flex-xxl-row pe-2 gap-3 gap-xxl-0 justify-content-xxl-between">
                    <div className="schedule-item-inner d-flex gap-2">
                      <div className="schedule-img d-flex align-items-center">
                        <img
                          width={60}
                          src="/images/schedule-img.png"
                          alt="schedule-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="schedule-item-data py-1 d-flex flex-column justify-content-between">
                        <div className="schedule-item-name fw-600">
                          Daniel Jordan
                        </div>
                        <div className="schedule-item-date">
                          04 Jan, 09:20AM
                        </div>
                      </div>
                    </div>
                    <div className="schedule-btn">
                      <button className="border-0 rounded-pill p-2 px-3 white-text">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="resource-status rounded-2 py-4">
          {/* <h3 className="px-4 fw-600 mb-3">Resource Status</h3>
          <div className="resource-table table-responsive">
            <table class="w-100">
              <thead>
                <tr>
                  <th className="fw-normal py-2" scope="col">
                    Resource Type
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Title
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Category
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Sub-Category
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Type
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    No. of Lessons
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Date of Submission
                  </th>
                  <th className="fw-normal py-2" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-approved">Approved</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-draft">Draft</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-review">In Review</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-approved">Approved</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-draft">Draft</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-review">In Review</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-approved">Approved</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-draft">Draft</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-review">In Review</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-approved">Approved</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-draft">Draft</td>
                </tr>
                <tr>
                  <td scope="row">Course</td>
                  <td>
                    <div className="title-box d-flex align-items-center gap-2">
                      <img
                        src="/images/table-title-img.png"
                        alt="table-title-img"
                      />
                      <p>Mathematics</p>
                    </div>
                  </td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>Premium</td>
                  <td>5</td>
                  <td>04-12-2022</td>
                  <td className="table-review">In Review</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </Layout>
    </div>
  );
}
