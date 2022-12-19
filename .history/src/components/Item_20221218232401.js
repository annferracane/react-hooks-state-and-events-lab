import React from "react";

function Item({ name, category, addedToCart, }) {


  function addToCartHandler(e) {
    console.log(e.target.parentElement);

  }

  return (
    <li className={addedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={e => addToCartHandler(e)}>Add to Cart</button>
    </li>
  );
}

export default Item;
