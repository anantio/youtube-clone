import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-2 py-2 m-2 bg-gray-200 rounded-lg text-center">
      {name}
    </div>
  );
};

export default Button;
