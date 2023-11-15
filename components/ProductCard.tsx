"use client";

import React from "react";

const ProductCard = () => {
  return (
    <div>
      <h1>ProductCardComponent</h1>
      <button onClick={() => console.log("AddToCart")}>Add</button>
    </div>
  );
};

export default ProductCard;
