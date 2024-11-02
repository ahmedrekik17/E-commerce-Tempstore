import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home";
import Shopes from "./components/Shopes";
import ABoutt from "./components/ABoutt";
import Contactus from "./components/Contactus";
import SavedProducts from "./components/SavedProducts";
import SingleProducts from "./components/SingleProducts";
import Cartt from "./components/Cartt";
import Checkout from "./components/Checkout";
import ThankYoupage from "./components/ThankYoupage";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { products } from "./components/products";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopes />} />
        <Route path="/about" element={<ABoutt />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/Saved-Products" element={<SavedProducts />} />
        <Route
          path="/shop/single-product/:productName"
          element={<SingleProducts />}
        />
        <Route path="/cart" element={<Cartt />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/checkout/thank-you" element={<ThankYoupage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
