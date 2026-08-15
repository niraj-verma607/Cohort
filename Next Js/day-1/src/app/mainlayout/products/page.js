"use client";
import React, { useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  let api = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    // console.log(data);

    setProducts(data);
  };
  api();

  return (
    <div className="p-6">
      <h1>Product shows here</h1>

      <div>
        {products.map((elem) => (
          <h1
            onClick={() => {
              console.log("Hello");
            }}
          >
            {elem.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default page;
