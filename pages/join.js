import React from "react";
import Link from "next/link";
import JoinForm from "../component/JoinForm/JoinForm";
import { ToastContainer } from "react-toastify";

const join = () => {
  return (
    <div>
      <ToastContainer />
      <div className="bgimg">
        <div className="topleft">
          <p>Group Chat</p>
        </div>
        <div className="middle">
          <JoinForm />
        </div>
      </div>
    </div>
  );
};

export default join;
