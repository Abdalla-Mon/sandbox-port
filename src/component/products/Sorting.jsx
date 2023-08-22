import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filterData } from "../../store/fetchData/fetchData";
import { useParams } from "react-router-dom";

export default function Sorting({ arr, loading }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const pageId = window.location.hash;

  function sort(e) {
    const num = pageId.slice(pageId.length - 1);
    let array;
    let curruentPage = num || 1;
    if (e === "low to high") {
      array = arr.slice().sort((a, b) => {
        return a.price.raw - b.price.raw;
      });
      return dispatch(filterData(array));
    } else if (e === "high to low") {
      array = arr.slice().sort((a, b) => {
        return b.price.raw - a.price.raw;
      });
      return dispatch(filterData(array));
    } else {
      array = arr.slice().sort((a, b) => {
        return a.sort_order - b.sort_order;
      });
      return dispatch(filterData(array));
    }
  }
  return (
    <div className="top-area flex flex-col tab:flex-row tab:justify-between tab:items-center">
      <div className="text mb-3 tab:mb-0">
        <h1>New Arrival</h1>
      </div>{" "}
      <div className="sorting">
        <select
          disabled={loading}
          ref={ref}
          onChange={(e) => {
            sort(e.target.value);
          }}
        >
          <option value={"popularity"}>sort by popularity</option>
          <option value={"low to high"}>sort by price: low to high</option>
          <option value={"high to low"}>sort by price: high to low</option>
        </select>
        <button
          id="sort-them"
          onClick={() => {
            sort(ref.current.value);
          }}
        ></button>
      </div>
    </div>
  );
}
