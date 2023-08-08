import React, { useEffect } from "react";
import Routes from "./routes/PageRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData, storageKey } from "./constants/storage";
import { useNavigate } from "react-router-dom";
import Loader from "./components/loader";
import AppRoutes from "./routes/PageRoutes";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = getData(storageKey?.AUTH_TOKEN);
    {
      if (!token && window?.location?.pathname == "/") {
        navigate("/");
      } else if (token) {
        navigate(window?.location?.pathname);
      } else {
        navigate("/");

      }
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Loader />
      <AppRoutes />
    </div>
  );
}

export default App;
