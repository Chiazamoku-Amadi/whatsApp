import React from "react";
import profilePicture from "../Assets/profile-picture.png";
import { ReactComponent as Status } from "../Assets/status-icon.svg";
import { ReactComponent as Message } from "../Assets/message-icon.svg";
import { ReactComponent as Menu } from "../Assets/menu-icon.svg";

function Header({ create }) {
  return (
    <header className="nav">
      <img className="profile" src={profilePicture} alt="" />
      <div>
        <Status />
        <Message className="new-chat" onClick={create} />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
