import Localbase from "localbase";

let db = new Localbase("db");

export const addUser = (user) => {
  return db.collection("users").add(user);
};

export const editUser = (user) => {
  return db.collection("users").doc({ id: user.id }).set(user);
};

export const deleteUser = (id) => {
  return db
    .collection("users")
    .doc({ id: parseInt(id) })
    .delete();
};

export const getUsers = () => {
  return db
    .collection("users")
    .get()
    .then((users) => users);
};

export const getUser = (id) => {
  return db
    .collection("users")
    .doc({ id: parseInt(id) })
    .get()
    .then((user) => user);
};

export const maxId = async () => {
  const data = await getUsers();
  return Math.max(...data.map((o) => o.id));
};

getUsers().then((data) => {
  if (data.length === 0) {
    db.collection("users").add({
      id: 1,
      name: "mohaned",
      phone: "01546033842",
      email: "mohaned@gg.com",
      age: 2,
      address: "mansoura",
    });
  }
});
