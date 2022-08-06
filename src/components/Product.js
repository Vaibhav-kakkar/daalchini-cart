import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;

  return (
    <div>
      <h3>{product.name}</h3>
      <img className="small" src={product.image} alt={product.name} />
      <div className="btn">
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>

      <div>Rs {product.price}</div>

      <div></div>
    </div>
  );
}
