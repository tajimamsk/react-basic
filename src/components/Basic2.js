import React, { useState } from "react";

const Basic2 = () => {
  const [products, setProducts] = useState([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: "Hello Reacts",
      },
    ]);
  };
  return (
    <div>
      <button onClick={newProducts}>Add New product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} id:{product.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic2;
