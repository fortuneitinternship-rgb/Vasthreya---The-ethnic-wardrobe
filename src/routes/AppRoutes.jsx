import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import TrackOrder from "../pages/Track-Order/Track-Order";
import Profile from "../pages/Profile/Profile";
import ContactUs from "../pages/Contact-Us/Contact-Us";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/track-order"
            element={<TrackOrder />}
          />

          {/* Profile */}
          <Route path="/profile" element={<Profile />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactUs />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;