import React, { useEffect, useState } from "react";

const Counter = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    console.log("UseEffect is Running....");
  }, [number1, number2, number3]);

  // useEffect hook ka use kisi bhi process ko side stack me chalne me help karta hai
  return (
    <div className="px-5 py-5">
      <h1 className="bg-emerald-400 px-5 py-2 w-fit mb-3">{number1}</h1>
      <button
        className="px-5 py-4 bg-red-500 text-white rounded-2xl mb-5"
        onClick={() => {
          setNumber1(number1 + 1);
        }}
      >
        Change Number 1
      </button>
      <h1 className="bg-emerald-400 px-5 py-2 w-fit mb-3">{number2}</h1>
      <button
        className="px-5 py-4 bg-red-500 text-white rounded-2xl mb-5"
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        Change Number 2
      </button>
      <h1 className="bg-emerald-400 px-5 py-2 w-fit mb-3">{number3}</h1>
      <button
        className="px-5 py-4 bg-red-500 text-white rounded-2xl mb-5"
        onClick={() => {
          setNumber3(number3 + 1);
        }}
      >
        Change Number 3
      </button>
    </div>
  );
};

export default Counter;
