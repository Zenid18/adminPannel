import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Instructors from "../pages/Instructors";

export default function PageRoutes() {
  const routes = [
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/instructors",
      Component: Instructors,
    },
  ];

  const Routing = routes.map(({ path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />
  ));

  return (
    <div className="">
      <Routes>{Routing}</Routes>
    </div>
  );
}
