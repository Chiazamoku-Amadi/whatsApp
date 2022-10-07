import React, { useState } from "react";
import { ReactComponent as LinkedDevices } from "../Assets/linked-devices.svg";
import { ReactComponent as Encryption } from "../Assets/encryption.svg";
import { ReactComponent as SearchIcon } from "../Assets/search-icon.svg";
import { ReactComponent as Menu } from "../Assets/menu-icon.svg";
import { ReactComponent as Emoji } from "../Assets/emoji.svg";
import { ReactComponent as Attach } from "../Assets/attach.svg";
import { ReactComponent as VoiceRecord } from "../Assets/voice-record.svg";
import MessageTextArea from "./MessageTextArea";
import { nanoid } from "nanoid";

function View({ chats }) {
  const messageText = chats.map((chat) => {
    return chat.messages.map((message) => {
      return message.text;
    });
  });

  const noneSelected = chats.every((chat) => !chat.isCurrentChat);

  const [newMessage, setNewMessage] = useState({
    id: nanoid(),
    text: messageText,
    sent: false,
  });
  const [chatMessages, setChatMessages] = useState([]);

  function createNewMessage() {
    newMessage.sent &&
      setChatMessages((prevMessages) => [...prevMessages, newMessage.text]);

    console.log(newMessage.text, newMessage.id);
  }

  // Event handler for textarea
  function handleChange(event) {
    setNewMessage({
      ...newMessage,
      [event.target.name]: event.target.value,
    });

    console.log(newMessage);
  }

  // Event handler for handling "enter" key press to send message
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      newMessage.sent = true;
      createNewMessage();
    } else {
      newMessage.sent = false;
    }
  }

  // Chat header section
  const chatHeader = chats.map((chat) => {
    const messageTime = chat.messages.map((message) => {
      return message.time;
    });

    return (
      chat.isCurrentChat && (
        <header key={chat.id} className="view-user-header">
          <div className="view-user-dp">{chat.profilePicture}</div>
          <div className="view-user-name">{chat.name}</div>
          <div className="last-seen">last seen by {messageTime}</div>
          <SearchIcon className="view-search" />
          <Menu className="view-menu" />
        </header>
      )
    );
  });

  // Chat messages section
  const chatMessage = chats.map((chat) => {
    return (
      chat.isCurrentChat && (
        <div key={chat.id} className="view-user-messages">
          {chatMessages.map((chatMessage) => chatMessage)}
        </div>
      )
    );
  });

  // Chat footer section
  const chatFooter = chats.map((chat) => {
    return (
      chat.isCurrentChat && (
        <footer key={chat.id} className="view-user-footer">
          <Emoji className="view-footer-emoji" />
          <Attach className="view-footer-attach" />
          <MessageTextArea
            className="view-footer-type-message"
            onKeyPress={handleKeyPress}
            text={messageText}
            newMessage={newMessage}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
          <VoiceRecord className="view-footer-voice-record" />
        </footer>
      )
    );
  });

  return (
    <>
      {chats && noneSelected ? (
        <main className="chat-view-initial">
          <LinkedDevices />
          <div className="about">
            <h1>WhatsApp Web</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time.
            </p>
          </div>
          <div className="encrypt">
            <span>
              <Encryption />
            </span>
            <p>End-to-end encrypted</p>
          </div>
          <div className="green"></div>
        </main>
      ) : (
        <section className="chat-view">
          <div className="view-header">{chatHeader}</div>
          <div className="view-messages">{chatMessage}</div>
          <div className="view-footer">{chatFooter}</div>
        </section>
      )}
    </>
  );
}

export default View;
