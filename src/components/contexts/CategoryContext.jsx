import React, { useState } from "react";

export const categContext = React.createContext({
  category: "All",
  setCategory: () => {},
});

const CategoryContext = (props) => {
  const [category, setcategory] = useState("All");

  const setCategory = (value) => {
    setcategory(value);
  };

  return (
    <categContext.Provider value={{ category: category, setCategory }}>
      {props.children}
    </categContext.Provider>
  );
};

export default CategoryContext;
