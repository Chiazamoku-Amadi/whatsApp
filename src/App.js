import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import View from "./Components/View";
import { nanoid } from "nanoid";
import { ReactComponent as PersonAvatar } from "./Assets/person-avatar.svg";

function App() {
  const [allChats, setAllChats] = useState([]);

  // const personAvatar = <PersonAvatar />;

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
      // lastMessage: messages.at[-1],
      // lastMessageTime: lastMessage.time,
      // lastSeen,
    };

    setAllChats((prevChats) => [...prevChats, newChat]);
    console.log("create");
  }
  console.log(allChats);

  return (
    <div className="container">
      <header className="header">
        <Header create={createNewChat} />
      </header>
      <aside className="side">
        <SideBar chats={allChats} />
      </aside>
      <main className="view">
        <View />
      </main>
    </div>
  );
}

export default App;
