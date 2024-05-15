import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="col-span-1">
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer"
          onClick={() => handleMenuToggle()}
        />
        <FontAwesomeIcon
          className="mx-2"
          icon={faYoutube}
          size="2xl"
          style={{ color: "#d3350d" }}
        />
        <strong>YouTube</strong>
      </div>

      <div className=" col-span-10 w-full">
        <input
          className="border border-gray-400 p-2 rounded-l-full w-4/5"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 w-1/12">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className=" col-span-1">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Head;
