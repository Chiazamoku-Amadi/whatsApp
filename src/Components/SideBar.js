import React from "react";
import Search from "./Search";
import { ReactComponent as Filter } from "../Assets/filter-icon.svg";

function SideBar({ chats }) {
  const chatSummary = chats.map((chat, index) => {
    const messageText = chat.messages.map((message, index) => {
      console.log(message.text);
      return message.text;
    });

    const messageTime = chat.messages.map((message, index) => {
      console.log(message.time);
      return message.time;
    });

    return (
      <div key={chat.id} className="chat">
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
        <div className="side-bar-header-search">{<Search />}</div>
        <div className="side-bar-header-filter">
          <Filter />
        </div>
      </header>
      <section>
        <div>{chatSummary}</div>
      </section>
    </aside>
  );
}

export default SideBar;
