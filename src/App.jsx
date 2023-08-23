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
function App() {
  const data = useSelector((e) => e.data);
  console.log(data);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      {load ? <Loader /> : null}
      {load ? null : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/:prodId"
              element={<SingleProductPage data={data} />}
            />
            <Route path={"/*"} element={<Home />}></Route>
            <Route path="services" element={<Services />} />
            <Route path="shop/*" element={<Products />}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
