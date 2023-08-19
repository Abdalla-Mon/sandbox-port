import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/router/Footer";
import Navbar from "./component/router/Navbar";
import Services from "./component/services/Services";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
