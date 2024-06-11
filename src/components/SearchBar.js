import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showRes, setShowRes] = useState(false);
  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setResult(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setResult(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div>
      <div className="col-span-10 w-full">
        <input
          className="border border-gray-400 p-2 rounded-l-full w-4/5"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowRes(true)}
          onBlur={() => setShowRes(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 w-1/12">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {searchQuery && showRes && (
        <div className="absolute w-1/3 bg-white px-5 py-2 shadow-md rounded-md border-gray-200">
          <ul>
            {result.map((item) => {
              return (
                <li className="m-1 p-1 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
