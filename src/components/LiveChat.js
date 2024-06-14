import React, { useEffect, useState } from "react";

import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";
import Button from "./Button";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [text, setText] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateName(),
          message: "Lorem Ipsum 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] p-1 ml-2 border border-black bg-gray-200 overflow-y-scroll">
        LiveChat
        <div>
          {chatMessages.map((c, index) => (
            <ChatMsg name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anant",
              message: text,
            })
          );
          setText("");
        }}
      >
        <input
          type="text"
          className="p-2 m-2 w-2/3 border border-black rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="p-2 m-2  w-1/3  bg-green-400 rounded-sm">≫</button>
      </form>
    </>
  );
};

export default LiveChat;
