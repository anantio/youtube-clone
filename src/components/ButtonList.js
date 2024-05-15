import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Soccer",
    "Gaming",
    "Podcasts",
    "Live",
    "Songs",
    "Cricket",
    "IndiePop",
    "Coding",
    "Tech",
  ];
  return (
    <div className="flex w-full">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
