import React, {useState} from "react";

function Item({ name, category, addedToCart}) {

  const [addedToCartClass, setAddedToCartClass] = useState("");


  function addToCartHandler(e) {
    setAddedToCartClass(addedToCartClass === "in-cart" ? "" : "");
  }

  return (
    <li className={addedToCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={e => addToCartHandler(e)}>Add to Cart</button>
    </li>
  );
}

export default Item;
