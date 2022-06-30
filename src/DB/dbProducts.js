import Localbase from "localbase";

let db = new Localbase("db");

export const getProducts = () => {
  return db
    .collection("products")
    .get()
    .then((products) => products);
};

export const getProduct = (id) => {
  return db
    .collection("products")
    .doc({ id: parseInt(id) })
    .get()
    .then((product) => product);
};

getProducts().then((data) => {
  if (data.length === 0) {
    db.collection("products").set([
      {
        id: 1,
        name: "Headphone 1",
        image: "headphone1.jpg",
        price: "250",
        quantity: "50",
        category: "Headphone",
      },
      {
        id: 2,
        name: "Shoes 1",
        image: "shoes1.jpg",
        price: "1000",
        quantity: "120",
        category: "Shoes",
      },
      {
        id: 3,
        name: "Laptop 1",
        image: "laptop1.jpg",
        price: "21000",
        quantity: "50",
        category: "Laptop",
      },
      {
        id: 4,
        name: "Headphone 2",
        image: "headphone2.jpg",
        price: "650",
        quantity: "30",
        category: "Headphone",
      },
      {
        id: 5,
        name: "Watch 3",
        image: "watch3.jpg",
        price: "900",
        quantity: "30",
        category: "Watch",
      },
      {
        id: 6,
        name: "Shoes 2",
        image: "shoes2.jpg",
        price: "500",
        quantity: "40",
        category: "Shoes",
      },
      {
        id: 7,
        name: "Laptop 2",
        image: "laptop2.jpg",
        price: "18000",
        quantity: "140",
        category: "Laptop",
      },
      {
        id: 8,
        name: "Watch 2",
        image: "watch2.jpg",
        price: "300",
        quantity: "100",
        category: "Watch",
      },
      {
        id: 9,
        name: "Headphone 3",
        image: "headphone3.jpg",
        price: "320",
        quantity: "100",
        category: "Headphone",
      },
      {
        id: 10,
        name: "Laptop 3",
        image: "laptop3.jpg",
        price: "25000",
        quantity: "10",
        category: "Laptop",
      },
      {
        id: 11,
        name: "Shoes 3",
        image: "shoes3.jpg",
        price: "800",
        quantity: "40",
        category: "Shoes",
      },
      {
        id: 12,
        name: "Watch 1",
        image: "watch1.jpg",
        price: "800",
        quantity: "60",
        category: "Watch",
      },
    ]);
  }
});
