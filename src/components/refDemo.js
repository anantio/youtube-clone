import React from "react";

let x = 10;

const refDemo = () => {
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black">
      <div>
        <button className="bg-green p-2 m-2 w-3" onChange={() => (x = x + 1)}>
          Increase x
        </button>
        <h1 className="font-bold text-xl">Let = {x}</h1>
      </div>
    </div>
  );
};

export default refDemo;
