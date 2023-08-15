import Home from "./component/home/Home";
import Navbar from "./component/router/Navbar";
import data from "./home-imgs.json";

function App() {
  console.log(data);
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
