import React, { useState } from "react";
import { ReactComponent as LinkedDevices } from "../Assets/linked-devices.svg";
import { ReactComponent as Encryption } from "../Assets/encryption.svg";
import { ReactComponent as SearchIcon } from "../Assets/search-icon.svg";
import { ReactComponent as Menu } from "../Assets/menu-icon.svg";
import { ReactComponent as Emoji } from "../Assets/emoji.svg";
import { ReactComponent as Attach } from "../Assets/attach.svg";
import { ReactComponent as VoiceRecord } from "../Assets/voice-record.svg";
import { ReactComponent as DoubleTickUnread } from "../Assets/double-tick-unread.svg";
import { ReactComponent as DoubleTickRead } from "../Assets/double-tick-read.svg";
import EmojiPicker from "emoji-picker-react";

function View({
  chats,
  chatMessages,
  currentChat,
  currentChatId,
  newMessage,
  setNewMessage,
  createNewMessage,
}) {
  // const currentChat = chats.map((chat) => chat.isCurrentChat);

  const noneSelected = chats.every((chat) => !chat.isCurrentChat);

  const [chooseEmoji, setChooseEmoji] = useState(false);

  // Event handler for textarea
  function handleChange(event) {
    setNewMessage({
      ...newMessage,
      [event.target.name]: newMessage.sent ? "" : event.target.value,
    });
  }

  // Event handler for handling "enter" key press to send message
  function handleKeyPress(event) {
    if (event.target.value !== "" && event.key === "Enter") {
      newMessage.sent = true;
      createNewMessage();
    } else {
      newMessage.sent = false;
    }
  }

  // Chat header section
  const chatHeader = chats.map((chat) => {
    let id = chat.id;

    // To get all message objects of the current chat
    const filterCurrentChatMessages = chatMessages.filter(
      (chatMessage) => chatMessage.id === id
    );
    console.log({ filterCurrentChatMessages });

    // To get an array of the time of all message objects of the current chat
    const lastMessagesTime = filterCurrentChatMessages[0].msg.map((item) => {
      return item.time;
    });

    const lastMessageTime = lastMessagesTime[lastMessagesTime.length - 1]; // To get the time the last message was sent

    return (
      chat.isCurrentChat && (
        <header key={chat.id} className="view-user-header">
          <div className="view-user-dp">{chat.profilePicture}</div>
          <div className="view-user-name">{chat.name}</div>
          <div className="last-seen">last seen by {lastMessageTime}</div>
          <SearchIcon className="view-search" />
          <Menu className="view-menu" />
        </header>
      )
    );
  });

  // Chat messages section
  const chatMessage =
    currentChat &&
    chats.map((chat) => {
      return (
        chat.id === currentChatId && (
          <div key={chat.id} className="view-user-messages">
            {chat.messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className={
                    message.friend
                      ? "user-messages friend-messages"
                      : "user-messages"
                  }
                >
                  <div>{message.text}</div>
                  <div className="user-messages-time-read">
                    <p>{message.time}</p>
                    <div className={message.friend ? "remove" : ""}>
                      {message.read ? <DoubleTickRead /> : <DoubleTickUnread />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      );
    });
  console.log(chatMessage);

  function selectEmoji() {
    setChooseEmoji(!chooseEmoji);

    return;
  }

  // Chat footer section
  const chatFooter = chats.map((chat) => {
    return (
      chat.isCurrentChat && (
        <div key={chat.id}>
          {chooseEmoji ? (
            <EmojiPicker width={700} height={300} className="emoji-picker" />
          ) : null}
          <footer className="view-user-footer">
            <Emoji className="view-footer-emoji" onClick={selectEmoji} />
            <Attach className="view-footer-attach" />
            <textarea
              name="text"
              value={newMessage.text}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="typeMessage"
            />
            <VoiceRecord className="view-footer-voice-record" />
          </footer>
        </div>
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
