import { useDispatch } from "react-redux";
import { filterData } from "../../store/fetchData/fetchData";
import { useState } from "react";
export default function FilterPrice({ arr }) {
  let prices = arr.map((e) => e.price.raw);
  const [minPrice, setMinPrice] = useState(Math.min(...prices));
  const [maxPrice, setMaxPrice] = useState(Math.max(...prices));
  const dispatch = useDispatch();
  function filter() {
    let filterArr = arr.filter((e) => {
      return e.price.raw <= maxPrice && e.price.raw >= minPrice;
    });

    dispatch(filterData(filterArr));
  }
  return (
    <div className="price">
      <h1 className="mt-3">Price</h1>
      <div className="flex price-inputs gap-3">
        <input
          type="number"
          min={0}
          value={minPrice}
          max={maxPrice - 5}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span>-</span>
        <input
          type="number"
          min={minPrice + 5}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button
        id="price-btn"
        onClick={() => {
          filter();
        }}
      >
        Filter Price
      </button>
    </div>
  );
}
