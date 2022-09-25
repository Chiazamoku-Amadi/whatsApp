import React from "react";
import { ReactComponent as LinkedDevices } from "../Assets/linked-devices.svg";
import { ReactComponent as Encryption } from "../Assets/encryption.svg";

function View() {
  return (
    <>
      <main className="chat-view">
        <LinkedDevices />
        <div className="about">
          <h1>WhatsApp Web</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
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
    </>
  );
}

export default View;
