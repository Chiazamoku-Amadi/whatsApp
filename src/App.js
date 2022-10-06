import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import View from "./Components/View";
import { nanoid } from "nanoid";
import { ReactComponent as PersonAvatar } from "./Assets/person-avatar.svg";

function App() {
  const [allChats, setAllChats] = useState([]);

  function createNewChat() {
    let date = new Date();

    const newChat = {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Jane Doe",
      messages: [
        {
          text: "Lorem Ipsum",
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
        },
      ],
      isCurrentChat: false,
      // lastMessage: messages.at[-1],
      // lastMessageTime: lastMessage.time,
      // lastSeen,
    };

    setAllChats((prevChats) => [...prevChats, newChat]);
    console.log("create");
  }
  console.log(allChats);

  function isCurrentChat(id) {
    setAllChats((prevChats) =>
      prevChats.map((chat) => {
        return chat.id === id
          ? { ...chat, isCurrentChat: true }
          : { ...chat, isCurrentChat: false };
      })
    );
  }

  return (
    <div className="container">
      <header className="header">
        <Header create={createNewChat} />
      </header>
      <aside className="side">
        <SideBar chats={allChats} currentChat={isCurrentChat} />
      </aside>
      <main className="view">
        <View chats={allChats} />
      </main>
    </div>
  );
}

export default App;
