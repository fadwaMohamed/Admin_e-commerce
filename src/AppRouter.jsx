import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/homePage/homePage/HomePage";
import UsersList from "./components/users/UsersList/UsersList";
import EditUser from "./components/users/EditUser/EditUser";
import AddUser from "./components/users/AddUser/AddUser";
import DeleteUser from "./components/users/DeleteUser/DeleteUser";
import Cart from "./components/cart/Cart/Cart";
import Checkout from "./components/checkout/Checkout/Checkout";
import Bill from "./components/bill/Bill";
import NotFound from "./components/layout/notFound/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/users" element={<UsersList />}>
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="add" element={<AddUser />} />
        <Route path="delete/:id" element={<DeleteUser />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/bill" element={<Bill />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
