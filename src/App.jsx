import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/router/Footer";
import Navbar from "./component/router/Navbar";
import Services from "./component/services/Services";
import { commerce } from "./lb/commerce";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
