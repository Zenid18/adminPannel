import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
    const isLoading = useSelector((state) => state.authReducer.isLoading);
    return (
        <>

            {isLoading ?
                <div className="loader-page position-fixed w-100 vh-100 d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                : ""}
        </>
    );
};
export default Loader;
