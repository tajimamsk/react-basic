import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("useeffect invoked!");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;
