import React from "react";
// import { nanoid } from "nanoid";

function MessageTextArea({ newMessage, handleChange, handleKeyPress }) {
  // const [chatMessages, setChatMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState({
  //   id: nanoid(),
  //   text: text,
  //   sent: false,
  // });

  // function createNewMessage() {
  //   setChatMessages((prevMessages) => [...prevMessages, newMessage]);
  // }

  // function handleChange(event) {
  //   setNewMessage({
  //     ...newMessage,
  //     [event.target.name]: event.target.value,
  //   });

  //   console.log(newMessage);
  // }

  // function handleKeyPress(event) {
  //   event.key === "Enter"
  //     ? (newMessage.sent = true) && createNewMessage()
  //     : (newMessage.sent = false);
  // }

  return (
    <div>
      <textarea
        name="text"
        value={newMessage.text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        // rows="1"
        className="typeMessage"
      />
    </div>
  );
}

export default MessageTextArea;
