import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black ">
      <div className="flex">
        <button
          className="p-2 m-2 bg-green-400"
          onClick={() => {
            x = x + 1;
            console.log("x is " + x);
          }}
        >
          Increase x
        </button>
        <h1 className="font-bold text-xl p-2 m-2">Let = {x}</h1>
      </div>
      <div className="flex">
        <button
          className="p-2 m-2 bg-green-400"
          onClick={() => {
            setY(y + 1);
            console.log("y is " + y);
          }}
        >
          Increase y
        </button>
        <h1 className="font-bold text-xl p-2 m-2">Let = {y}</h1>
      </div>
      <div className="flex">
        <button
          className="p-2 m-2 bg-green-400"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref is " + ref.current);
          }}
        >
          Increase ref
        </button>
        <h1 className="font-bold text-xl p-2 m-2">Ref = {ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
