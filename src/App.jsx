import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./store/fetchData/fetchData";
import { useEffect } from "react";
function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);
  return (
    <>
      <img src={data.dataArr.obj[0].img} />
    </>
  );
}

export default App;
