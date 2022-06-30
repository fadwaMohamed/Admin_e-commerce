import Localbase from "localbase";

let db = new Localbase("db");

export const addCartProduct = (cart) => {
  return db.collection("carts").add(cart);
};

export const editCartProduct = (cart) => {
  return db.collection("carts").doc({ id: cart.id }).set(cart);
};

export const deleteCartProduct = (id) => {
  return db
    .collection("carts")
    .doc({ id: parseInt(id) })
    .delete();
};

export const getCart = () => {
  return db
    .collection("carts")
    .get()
    .then((carts) => carts);
};

export const getCartCount = () => {
  return db
    .collection("carts")
    .get()
    .then((carts) => carts.length);
};

export const getCartProduct = (id) => {
  return db
    .collection("carts")
    .doc({ id: parseInt(id) })
    .get()
    .then((cart) => cart);
};

getCart().then((data) => {
  if (data.length === 0) {
    db.collection("carts").set([
      {
        id: 1,
        name: "Headphone 1",
        image: "headphone1.jpg",
        price: "250",
        quantity: "1",
        category: "Headphone",
      },
      {
        id: 2,
        name: "Shoes 1",
        image: "shoes1.jpg",
        price: "1000",
        quantity: "2",
        category: "Shoes",
      },
      {
        id: 3,
        name: "Laptop 1",
        image: "laptop1.jpg",
        price: "21000",
        quantity: "1",
        category: "Laptop",
      },
    ]);
  }
});
