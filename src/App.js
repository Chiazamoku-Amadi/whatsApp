import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import View from "./Components/View";
import { nanoid } from "nanoid";
import { ReactComponent as PersonAvatar } from "./Assets/person-avatar.svg";

function App() {
  let date = new Date();

  const [currentChatId, setCurrentChatId] = useState();

  // All manually rendered chats
  const [allChats, setAllChats] = useState([
    {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Jane Doe",
      messages: [
        {
          id: nanoid(),
          text: "Hello Jane",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "I'm doing alright as well",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
      ],
      isCurrentChat: false,
    },
    {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "John Doe",
      messages: [
        {
          id: nanoid(),
          text: "Hello John",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "I'm doing just fine",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
      ],
      isCurrentChat: false,
    },
    {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Jenny",
      messages: [
        {
          id: nanoid(),
          text: "Hello Jenny",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "I'm doing okay",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
      ],
      isCurrentChat: false,
    },
    {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Adaeze",
      messages: [
        {
          id: nanoid(),
          text: "Hello Adaeze",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
        },
        {
          id: nanoid(),
          text: "I'm doing fine",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
        },
      ],
      isCurrentChat: false,
    },
    {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Kosi",
      messages: [
        {
          id: nanoid(),
          text: "Hello Kosi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          lastMessage: false,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
          lastMessage: false,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          lastMessage: false,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          friend: true,
          lastMessage: false,
        },
        {
          id: nanoid(),
          text: "I'm doing great",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: true,
          lastMessage: true,
        },
      ],
      isCurrentChat: false,
    },
  ]);

  // All chat messages
  const [chatMessages, setChatMessages] = useState(
    allChats.map((chat) => {
      return { id: chat.id, msg: chat.messages };
    })
  );
  console.log({ chatMessages });

  // To create a new message to the sent by user
  const [newMessage, setNewMessage] = useState({
    text: "",
    sent: false,
    time: date.getHours() + ":" + date.getMinutes(),
    read: false,
  });

  // To create new message
  function createNewMessage() {
    newMessage.id = nanoid();

    newMessage.sent &&
      setAllChats((prevAllChats) =>
        prevAllChats.map((chat) => {
          return chat.id === currentChatId && [...chat.messages, newMessage];
          // : [...chat.messages];
        })
      );

    newMessage.sent &&
      setChatMessages(
        allChats.map((chat) => {
          return (
            chat.id === currentChatId && {
              id: chat.id,
              msg: [...chat.messages, newMessage],
            }
          );
        })
      );

    console.log("newM");
    console.log(allChats);
    console.log(chatMessages);
  }

  // To start a new chat
  function createNewChat() {
    const newChat = {
      id: nanoid(),
      profilePicture: <PersonAvatar className="user-profile-picture" />,
      name: "Jane Doe",
      messages: [
        {
          id: nanoid(),
          text: "Hello Jane",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
        },
        {
          id: nanoid(),
          text: "Hi",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
          friend: true,
        },
        {
          id: nanoid(),
          text: "How are you doing?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
        },
        {
          id: nanoid(),
          text: "I'm doing alright, you?",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
          friend: true,
        },
        {
          id: nanoid(),
          text: "I'm doing great",
          sent: true,
          time: date.getHours() + ":" + date.getMinutes(),
          read: false,
        },
      ],
      isCurrentChat: false,
      // lastSeen,
    };

    setAllChats((prevChats) => [...prevChats, newChat]);
  }
  console.log(allChats);

  // To make a chat the current chat and store its id in state
  function isCurrentChat(id) {
    setAllChats((prevChats) =>
      prevChats.map((chat) => {
        return chat.id === id
          ? { ...chat, isCurrentChat: true }
          : { ...chat, isCurrentChat: false };
      })
    );

    setCurrentChatId(id);
  }

  return (
    <div className="container">
      <header className="header">
        <Header create={createNewChat} />
      </header>
      <aside className="side">
        <SideBar
          chats={allChats}
          chatMessages={chatMessages}
          currentChat={isCurrentChat}
        />
      </aside>
      <main className="view">
        <View
          chats={allChats}
          chatMessages={chatMessages}
          currentChat={isCurrentChat}
          currentChatId={currentChatId}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          createNewMessage={() => createNewMessage()}
        />
      </main>
    </div>
  );
}

export default App;
