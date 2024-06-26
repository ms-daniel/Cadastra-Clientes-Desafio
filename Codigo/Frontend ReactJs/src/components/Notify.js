import React from "react";
import {toast, ToastContainer, Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = (type, message) => {
    switch (type){
        case 'error':
           toast.error(message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            break;
        case 'success':
            toast.success(message, {
                position: "top-center",
                autoClose: 1500, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            break;
        case 'info':
            toast.info(message, {
                position: "top-center",
                autoClose: 2000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            break;
        default:
            break;
    }
};

export default showToastMessage;