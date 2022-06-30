import Localbase from "localbase";

let db = new Localbase("db");

export const getCategories = () => {
  return db
    .collection("categories")
    .get()
    .then((categories) => categories);
};

export const getCategory = (id) => {
  return db
    .collection("categories")
    .doc({ id: parseInt(id) })
    .get()
    .then((category) => category);
};

getCategories().then((data) => {
  if (data.length === 0) {
    db.collection("categories").add({
      id: 1,
      name: "Headphone",
    });
    db.collection("categories").add({
      id: 2,
      name: "Shoes",
    });
    db.collection("categories").add({
      id: 3,
      name: "Laptop",
    });
    db.collection("categories").add({
      id: 4,
      name: "Watch",
    });
  }
});
