import { useEffect, useState } from "react";
import { commerce } from "../../commerce/commerce";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../../store/fetchData/fetchCat";
import { fetchData, filterData } from "../../store/fetchData/fetchData";
export default function Category() {
  const data = useSelector((s) => s.data);
  let subArr = data.subArr.data;
  const cat = useSelector((s) => s.cat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCat(commerce.categories.list()));
  }, []);
  const catData = cat.catArr.data;
  console.log(data);

  function filter(e) {
    const button = document.querySelector("#sort-them");
    let arr = [];
    if (e.toLowerCase() === "all") {
      arr = subArr.slice().filter((el) => {
        return el.categories[1].slug === e.toLowerCase();
      });
    } else {
      arr = subArr.slice().filter((el) => {
        return el.categories[0].slug === e.toLowerCase();
      });
    }
    dispatch(filterData(arr));
    window.setTimeout(() => {
      button.click();
    }, 5);
  }
  return (
    <div className="category">
      <h1>Category</h1>
      <ul>
        {cat.loading
          ? "loading..."
          : catData.map((e) => {
              return (
                <li
                  onClick={(e) => {
                    filter(e.target.textContent);
                  }}
                  key={e.id}
                >
                  {e.name}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
