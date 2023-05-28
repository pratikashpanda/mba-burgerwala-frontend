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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
