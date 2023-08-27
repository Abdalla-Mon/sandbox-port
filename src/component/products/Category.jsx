import { useEffect, useState } from "react";
import { commerce } from "../../commerce/commerce";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../store/fetchData/fetchData";
export default function Category() {
  const data = useSelector((s) => s.data);
  let subArr = data.subArr.data;
  // const cat = useSelector((s) => s.cat);
  const dispatch = useDispatch();

  const catData = [
    { id: "cat_31q0o3rn2wDdjR", name: "All", num: 16 },
    { id: "cat_gvRjwOJepl4mNL", name: "Accessories", num: 5 },
    { id: "cat_mOVKl4VnVoprRP", name: "Clothes", num: 3 },
    { id: "cat_nPEVlNZvvla7dM", name: "Cosmetics", num: 2 },
    { id: "cat_VPvL5zg06lAQkX", name: "Electronics", num: 3 },
    { id: "cat_yA6nldB9KoEWbz", name: "Shoes", num: 3 },
  ];

  function filter(e) {
    const button = document.querySelector("#sort-them");
    const priceBtn = document.querySelector("#price-btn");
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
      priceBtn.click();
    }, 5);
    window.setTimeout(() => {
      button.click();
    }, 10);
  }
  return (
    <div className="category">
      <h1>Category</h1>
      <ul>
        {catData.map((e) => {
          return (
            <li
              id={e.name}
              onClick={(el) => {
                filter(e.name);
                window.localStorage.setItem("cat", e.name);
              }}
              key={e.id}
            >
              {e.name}
              <span className="ml-3">({e.num})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
