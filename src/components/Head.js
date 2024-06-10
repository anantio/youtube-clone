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
import { Link, Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  const navigate = useNavigate();

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
          onClick={() => {
            navigate("/");
          }}
        />
        {/* <strong>YouTube</strong> */}
      </div>

      <SearchBar />
      <div className=" col-span-1">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Head;
