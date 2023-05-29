import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping.jsx";
import ConfirmOrder from "./components/Cart/ConfirmOrder.jsx";
import PaymentSuccess from "./components/Cart/PaymentSuccess.jsx";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myorders/MyOrders"
import OrderDetail from "./components/myorders/OrderDetail";
import Dashboard from "./components/admin/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
