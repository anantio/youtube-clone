import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ChatMsg = ({ name, message }) => {
  return (
    <div className="flex flex-wrap shadow-md my-2">
      <FontAwesomeIcon icon={faUserTie} />
      <span className="font-bold px-2">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMsg;
