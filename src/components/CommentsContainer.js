import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex bg-gray-100 rounded-sm p-2 my-1">
        <FontAwesomeIcon className="px-2 py-3" icon={faUser} />
        <div className="px-3">
          <div>{name}</div>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
