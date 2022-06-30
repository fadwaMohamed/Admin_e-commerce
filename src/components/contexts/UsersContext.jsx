import React, { useState } from "react";
import { getUsers } from "../../DB/dbUsers";

export const userContext = React.createContext({
  users: [],
  fetchUsers: () => {},
});

const UsersContext = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    getUsers().then((data) => setUsers(data));
  };

  return (
    <userContext.Provider value={{ users: users, fetchUsers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UsersContext;
