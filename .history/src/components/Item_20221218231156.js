import React from "react";

function Item({ name, category }) {



  function addToCartHandler(e) {

  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={e => addToCartHandler(e)}>Add to Cart</button>
    </li>
  );
}

export default Item;
