import React, { useState } from "react";

const Basic1 = (props) => {
  const [count, setCount] = useState(0);
  const [product, setProducts] = useState({ name: "", price: "" });

  // const clickHandler = () => {
  //   console.log("clicked");
  // };

  return (
    <>
      {/* <button
        onClick={() => {
          // setCount(count+1)
          // setCount(count+1)
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Count {count}
      </button> */}

      {/* <h1>Hello {props.name}</h1> */}
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProducts({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          value={product.price}
          onChange={(e) => setProducts({ ...product, price: e.target.value })}
        />
      </form>
      <h1>Product name is {product.name}</h1>
      <h1>Product price is {product.price}</h1>
    </>
  );
};

export default Basic1;
