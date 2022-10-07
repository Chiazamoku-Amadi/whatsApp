import React from "react";

function MessageTextArea({ newMessage, handleChange, handleKeyPress }) {
  return (
    <div>
      <textarea
        name="text"
        value={newMessage.text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        className="typeMessage"
      />
    </div>
  );
}

export default MessageTextArea;
