import React, { useState } from "react";

export const cartContext = React.createContext({
  count: "All",
  setCount: () => {},
});

const CartCountContext = (props) => {
  const [count, setcount] = useState(3);

  const setCount = (value) => {
    setcount(value);
  };

  return (
    <cartContext.Provider value={{ count: count, setCount }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartCountContext;
