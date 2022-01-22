import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

let user;

const JoinForm = () => {
  const [name, setname] = useState();
  const router = useRouter();

  const joinChat = () => {
    if (name) {
      user = name;
      router.push("/chat");
    } else {
      toast.error("Please enter name");
    }
    setname("");
    name = "";
  };
  return (
    <>
      <div className="joinForm">
        <div
          style={{
            borderradius: "10px",
            backdropfilter: " blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxshadow: "0 0 40px rgba(8, 7, 16, 0.6)",
            padding: "50px 15px",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "500",
              lineHeight: "42px",
              textAlign: "center",
            }}
          >
            Join Here
          </h3>

          <label
            style={{
              display: " block",
              marginTop: "30px",
              fontSize: "16px",
              fontWeight: "500",
            }}
            for="name"
          >
            Name
          </label>
          <input
            style={{
              display: "block",
              height: "50px",
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              borderRadius: "3px",
              padding: "0 10px",
              marginTop: "8px",
              fontSize: "14px",
              fontWeight: "300",
              color: "#FFF",
            }}
            type="text"
            placeholder="Enter your name"
            id="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />

          <button
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              color: "#080710",
              padding: "15px 0",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: " 5px",
              cursor: "pointer",
              margin: "20px​",
            }}
            onClick={joinChat}
          >
            JOIN
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinForm;
export { user };
