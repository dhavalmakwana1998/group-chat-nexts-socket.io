import React, { useEffect } from "react";
import { user } from "../component/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import ScrollToBottom from "react-scroll-to-bottom";
import Messages from "../component/Messages";
import TextBox from "../component/TextBox";

const chat = () => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast.error("Session Expired! back to home");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, []);

  return (
    <div>
      <ToastContainer />

      <div className="chat">
        <div className="chat-title">
          <h1>DMAk Group</h1>
          <h2>dhavalmakwana191@gmail.com</h2>
          <span className="back">back</span>{" "}
          <figure className="avatar">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHgZ0lkXIgEUw/profile-displayphoto-shrink_200_200/0/1619434104057?e=1648080000&v=beta&t=IZJzLv-jWPx0p9uoqNcm4nPy6WzvU6W084EOOCULjQM" />
          </figure>
        </div>
        <div className="messages">
          <ScrollToBottom className="messages-content">
            <Messages />
          </ScrollToBottom>
        </div>
        <div className="message-box">
          <TextBox />
        </div>
      </div>
    </div>
  );
};

export default chat;
