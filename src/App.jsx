import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/router/Footer";
import Navbar from "./component/router/Navbar";
import Services from "./component/services/Services";
import Products from "./component/products/Products";
import Loader from "./component/fixedComponent/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProductPage from "./component/products/SingleProductPage";
import { commerce } from "./commerce/commerce";
import Cart from "./component/cart/Cart";
import { fetchData } from "./store/fetchData/fetchData";
import AboutPage from "./component/about/AboutPage";
import Contact from "./component/contact/ContactPage";

function App() {
  const [whiteColor, setWhite] = useState(true);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    setLoad(false);
    setWhite(false);
  }, []);

  useEffect(() => {
    commerce.cart.retrieve();
  }, []);
  return (
    <>
      {load ? <Loader /> : null}
      {load ? null : (
        <>
          <Navbar setWhite={setWhite} whiteColor={whiteColor} />
          <Routes>
            <Route
              path="shop/single-product/:prodId"
              element={<SingleProductPage />}
            />
            <Route path={"/*"} element={<Home />}></Route>
            <Route path="services" element={<Services />} />
            <Route path="shop/*" element={<Products />}></Route>
            <Route path="cart/*" element={<Cart />}></Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contact setWhite={setWhite} />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
