import React, { useState } from "react";

export const ActiveContext = React.createContext({
  activeHeader: "",
  changeHeader: () => {}
});

const HeaderContext = (props) => {
  const [activeHeader, setActiveHeader] = useState("Home");

  const changeHeader = (value) => {
    setActiveHeader(value);
  }

  return (
    <ActiveContext.Provider value={{ activeHeader: activeHeader, changeHeader }}>
      {props.children}
    </ActiveContext.Provider>
  );
};

export default HeaderContext;
