import React, { useEffect, useMemo, useState } from "react";
import Button from "./Button";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkMode, setDarkMode] = useState(false);

  const prime = useMemo(() => nthPrime(text), [text]);
  console.log(prime);

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black  ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <button
        className="p-2 m-2 bg-green-300"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        Toggle
      </button>
      <div>
        <input
          className="border border-black w-full"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p className={`font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
        Result:{prime}
      </p>
    </div>
  );
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  if (n < 1) return null;

  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}

export default Demo;
