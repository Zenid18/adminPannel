import React, { useState } from "react";
import Layout from "../layout/layout";
// import Chart from "../components/chart";

export default function Dashboard() {
  const [sidebarActive, setSidebarActive] = useState("dashboard");
  return (
    <div>
      <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
        <div className="today-schedule-box rounded-2 p-2">

        </div>
        <div className="graph-main-box my-3 ">

        </div>
        <div className="resource-status rounded-2 py-4">
        </div>
      </Layout>
    </div>
  );
}
