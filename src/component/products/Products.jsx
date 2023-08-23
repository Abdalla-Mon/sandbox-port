import { Link, Route, Routes, useParams } from "react-router-dom";
import ProductCard from "../fixedComponent/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/fetchData/fetchData";
import { useEffect } from "react";
import { commerce } from "../../commerce/commerce";
import Sorting from "./Sorting";
import Category from "./Category";
export default function Products() {
  const mainData = useSelector((state) => state.data);

  let arr = mainData.mainArr.data;
  let wholeData = mainData.mainArr;
  if (arr !== undefined) {
    arr = arr.slice(0, 9);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(commerce.products.list()));
  }, []);

  useEffect(() => {
    // commerce.cart.retrieve().then((cart) => console.log(cart));
    commerce.cart.refresh().then((cart) => console.log(cart));
  }, []);

  return (
    <section className="products pt-20">
      <TopProducts />
      <section className="products-container">
        <div className="container mx-auto">
          <div className="product-flex  tab:flex tab:flex-row-reverse  tab:gap-14 lab:gap-20">
            <div className="right w-full">
              {mainData.loading ? null : (
                <Sorting
                  arr={wholeData.data}
                  // meta={mainData.mainArr.meta}
                  loading={mainData.loading}
                />
              )}
              <div className="products-area">
                {mainData.loading === false ? (
                  <Routes>
                    <Route index element={<Page arr={arr} />} />
                    <Route
                      path={":pageId"}
                      element={<Page arr={wholeData.data} />}
                    />
                  </Routes>
                ) : null}{" "}
                {mainData.loading === false ? (
                  <Pagination arr={mainData.mainArr} />
                ) : null}
              </div>
            </div>
            <div className="left mt-10 tab:mt-0">
              <Category />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function Pagination({ arr }) {
  let pagCount = Math.ceil(arr.data.length / 9);
  let array = [];
  for (let i = 0; i < pagCount; i++) {
    array.push(1);
  }
  return (
    <div className="pagination-satck flex justify-center ">
      <ul className=" flex ">
        {array.map((e, i) => {
          return (
            <Link to={"page" + (i + 1)} onClick={() => {}}>
              {i + 1}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

function TopProducts() {
  return (
    <div className=" product-top ">
      <div className="container flex gap-3 items-center ">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
        <p>Shop</p>
      </div>
    </div>
  );
}

export function Page({ arr }) {
  const pageId = window.location.hash;
  let num;
  num = pageId.slice(pageId.length - 1);
  console.log(useParams());

  if (/\d/.test(num) === false) {
    num = 1;
  }
  arr = [...arr].slice(9 * (num - 1), 9 * num);
  return (
    <div className="grid gap-10 lap:grid-cols-3 tab:grid-cols-2">
      {arr.length === 0 ? (
        <p className="empty-page">
          No product in this Page{" "}
          <Link to={"/shop/page1"}>back to page 1?</Link>
        </p>
      ) : null}
      {arr.map((e) => {
        return <>{arr.length === 0 ? null : <ProductCard e={e} />}</>;
      })}
    </div>
  );
}
