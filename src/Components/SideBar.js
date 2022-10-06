import React from "react";
import Search from "./Search";
import { ReactComponent as Filter } from "../Assets/filter-icon.svg";

function SideBar({ chats, currentChat }) {
  const chatSummary = chats.map((chat) => {
    const messageText = chat.messages.map((message) => {
      return message.text;
    });

    const messageTime = chat.messages.map((message) => {
      return message.time;
    });

    const id = chat.id;

    return (
      <div
        key={id}
        onClick={() => currentChat(id)}
        className={chat.isCurrentChat ? "chat currentChat" : "chat"}
      >
        <div className="user-dp">{chat.profilePicture}</div>
        <div className="user-name">{chat.name}</div>
        <div className="chat-message">{messageText}</div>
        <div className="time-received">{messageTime}</div>
      </div>
    );
  });

  return (
    <aside>
      <header className="side-bar-header">
        <Search className="side-bar-header-search" />
        <Filter className="side-bar-header-filter" />
      </header>
      <section>
        <div>{chatSummary}</div>
      </section>
    </aside>
  );
}

export default SideBar;
