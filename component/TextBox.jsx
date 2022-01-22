import React from "react";

const TextBox = () => {
  return (
    <div>
      <textarea
        type="text"
        className="message-input"
        placeholder="Type message..."
      ></textarea>
      <button type="submit" className="message-submit">
        Send
      </button>
    </div>
  );
};

export default TextBox;
