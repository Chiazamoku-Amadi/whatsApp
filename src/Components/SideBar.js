import React, { useState } from "react";
import Search from "./Search";
import { ReactComponent as Filter } from "../Assets/filter-icon.svg";

function SideBar({
  chats,
  chatMessages,
  currentChat,
  lastMessageText,
  lastMessageTime,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(currentChat);

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  const chatSummary = chats.map((chat) => {
    const id = chat.id;

    // To get all message objects of the current chat
    const filterCurrentChatMessages = chatMessages.filter(
      (chatMessage) => chatMessage.id === id
    );
    console.log({ filterCurrentChatMessages });

    // To get an array of the texts of all message objects of the current chat
    const lastMessagesText = filterCurrentChatMessages[0].msg.map((item) => {
      return item.text;
    });

    // To get an array of the time of all message objects of the current chat
    const lastMessagesTime = filterCurrentChatMessages[0].msg.map((item) => {
      return item.time;
    });

    const lastMessageText = lastMessagesText[lastMessagesText.length - 1]; // To get the text of the last message object
    const lastMessageTime = lastMessagesTime[lastMessagesTime.length - 1]; // To get the time the last message was sent

    console.log(lastMessageText, "lastMessageText");
    console.log(lastMessageTime, "lastMessageTime");

    return (
      <div
        key={id}
        onClick={() => currentChat(id)}
        className={chat.isCurrentChat ? "chat currentChat" : "chat"}
      >
        <div className="user-dp">{chat.profilePicture}</div>
        <div className="user-name">{chat.name}</div>
        <div className="chat-message">
          {lastMessageText.length > 20
            ? lastMessageText.substr(0, 20) + "..."
            : lastMessageText}
        </div>
        <div className="time-received">{lastMessageTime}</div>
      </div>
    );
  });

  const filteredData = chats.filter((chat) => {
    if (searchQuery === "") {
      return chat;
    } else if (chat.name.toLowerCase().includes(searchQuery)) {
      return chat;
    }
    return false;
  });

  const filteredDataSummary = filteredData.map((chat) => {
    const id = chat.id;

    return (
      <div
        key={id}
        onClick={() => currentChat(id)}
        className={chat.isCurrentChat ? "chat currentChat" : "chat"}
      >
        <div className="user-dp">{chat.profilePicture}</div>
        <div className="user-name">{chat.name}</div>
        <div className="chat-message">{lastMessageText}</div>
        <div className="time-received">{lastMessageTime}</div>
      </div>
    );
  });

  return (
    <aside>
      <header className="side-bar-header">
        <Search
          className="side-bar-header-search"
          searchQuery={handleSearchQueryChange}
          value={searchQuery}
        />
        <Filter className="side-bar-header-filter" />
      </header>
      <section>
        {searchQuery !== "" ? (
          <div>{filteredDataSummary}</div>
        ) : (
          <div>{chatSummary}</div>
        )}
      </section>
    </aside>
  );
}

export default SideBar;
