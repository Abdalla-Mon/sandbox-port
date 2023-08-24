import { Link, Route, Routes, useParams } from "react-router-dom";
import ProductCard from "../fixedComponent/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/fetchData/fetchData";
import { useEffect } from "react";
import { commerce } from "../../commerce/commerce";
import Sorting from "./Sorting";
import Category from "./Category";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "@emotion/styled";
import FilterPrice from "./FilterByPrice";
import { Skeleton, Stack } from "@mui/material";
export default function Products() {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#ffffff ",
      color: "#343f52",
    },
  }));

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
    commerce.cart.retrieve().then((cart) => console.log(cart));
    // commerce.cart.refresh().then((cart) => console.log(cart));
  }, []);

  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
      }}
    >
      <section className="products pt-20">
        <TopProducts />
        <section className="products-container">
          <div className="container mx-auto">
            <div className="product-flex  tab:flex tab:flex-row-reverse  tab:gap-14 lab:gap-20">
              <div className="right w-full">
                <div className="flex justify-between items-center">
                  {mainData.loading ? (
                    <>
                      <Skeleton width={120} height={30} />
                      <Skeleton variant="rounded" width={150} height={30} />
                    </>
                  ) : null}
                </div>
                {mainData.loading ? null : (
                  <Sorting arr={wholeData.data} loading={mainData.loading} />
                )}
                <div className="products-area">
                  {mainData.loading ? <PageSkeleton /> : null}
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
                {mainData.loading ? null : (
                  <FilterPrice arr={mainData.mainArr.data} />
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </SnackbarProvider>
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
      <div className="container mx-auto flex gap-3 items-center ">
        <Link to="/" className="a">
          Home
        </Link>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
        <a>Shop</a>
      </div>
    </div>
  );
}
function PageSkeleton() {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(i);
  }
  return (
    <div className="page-skeleton grid gap-10 lap:grid-cols-3 tab:grid-cols-2">
      {arr.map((e) => {
        return (
          <Stack spacing={0.5} key={e}>
            <Skeleton variant="rounded" width={"100%"} height={300} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rounded" width={"50%"} height={30} />
            <Skeleton variant="rounded" width={"20%"} height={20} />
          </Stack>
        );
      })}
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
          No product in this page ,change the price filter or back to page1
        </p>
      ) : null}
      {arr.map((e) => {
        return <>{arr.length === 0 ? null : <ProductCard e={e} />}</>;
      })}
    </div>
  );
}
