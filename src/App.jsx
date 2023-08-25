import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/router/Footer";
import Navbar from "./component/router/Navbar";
import Services from "./component/services/Services";
import Products, { Page } from "./component/products/Products";
import Loader from "./component/fixedComponent/Loader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleProductPage from "./component/products/SingleProductPage";
import { commerce } from "./commerce/commerce";
import Cart from "./component/cart/Cart";

function App() {
  const [data, setData] = useState([]);
  // const data = useSelector((e) => e.data);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    commerce.products.list().then((e) => setData(e));
    setLoad(false);
  }, []);
  useEffect(() => {
    commerce.cart.retrieve();
    // commerce.cart.refresh().then((cart) => console.log(cart));
  }, []);
  return (
    <>
      {load ? <Loader /> : null}
      {load ? null : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="shop/single-product/:prodId"
              element={<SingleProductPage data={data} />}
            />
            <Route path={"/*"} element={<Home />}></Route>
            <Route path="services" element={<Services />} />
            <Route path="shop/*" element={<Products />}></Route>
            <Route path="cart/*" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
