import { Rating } from "@mui/material";
import {
  SnackbarProvider,
  closeSnackbar,
  enqueueSnackbar,
  MaterialDesignContent,
} from "notistack";
import { Link, NavLink } from "react-router-dom";
import { commerce } from "../../commerce/commerce";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleProdText({ arr, id }) {
  const selectedEle = arr.filter((e) => e.id === id)[0];
  const [qt, setQty] = useState(1);
  const ref = useRef(null);

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#ffffff ",
      color: "#343f52",
    },
  }));
  const action = (snackbarId) => (
    <>
      <button
        className="dismiss"
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        Dismiss
      </button>
      <Link to={"/cart"} className="snack-bar-cart">
        View cart
      </Link>
    </>
  );
  function addToCart(id, qty) {
    commerce.cart.add(id, qty || 1);
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 2000,
      action,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
  }
  let message = "Added to cart";
  const navArr = ["sm", "s", "m", "l", "xl"];
  const colorsArr = ["#fab758", "#e2626b", "#7cb798", "#3f78e0", "#a07cc5"];
  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
      }}
    >
      <h1>{selectedEle.name}</h1>
      <h2>{selectedEle.price.formatted_with_symbol}</h2>
      <div className="flex rating gap-5">
        <Rating name="read-only" value={5} readOnly className="rating-span" />
        <span> (3 Reviews)</span>
      </div>
      <p className="my-5">
        Cum sociis natoque penatibus et magnis dis parturient montes nascetur
        ridiculus mus. Duis mollis, est non commodo luctus. Nulla vitae elit
        libero pharetra augue. Donec id elit non mi porta gravida at eget metus.
      </p>
      <div className="choose-size">
        <h3>Choose a size</h3>
        <ul className="flex sizes gap-3">
          {navArr.map((el, index) => {
            return (
              <li
                key={el}
                className={index === 0 ? "active" : ""}
                onClick={(e) => {
                  document.querySelectorAll(".sizes li").forEach((e) => {
                    e.classList.remove("active");
                  });
                  e.target.classList.add("active");
                }}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="choose-color">
        <h3>Choose a color</h3>
        <ul className="flex colors gap-2">
          {colorsArr.map((el, index) => {
            return (
              <li
                key={el}
                style={{ backgroundColor: el, outline: `1px solid ${el}` }}
                className={index === 0 ? "active" : ""}
                onClick={(e) => {
                  document.querySelectorAll(".colors li").forEach((e) => {
                    e.classList.remove("active");
                  });
                  e.target.classList.add("active");
                }}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="add-to-cart-2 flex">
        <div className="cart-input">
          <input
            className="qty"
            type="number"
            min={0}
            onChange={(e) => setQty(e.target.value)}
            value={qt}
            ref={ref}
          />
        </div>
        <div
          onClick={() => {
            qt > 0 ? addToCart(selectedEle.id, qt) : null;
          }}
          style={qt > 0 ? { cursor: "pointer" } : { cursor: "not-allowed" }}
          className="mx-2 add-to-cart font-bold text-lg flex justify-center items-center  "
        >
          <FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="mr-1" />{" "}
          Add to cart
        </div>
        <div className="love-icon">
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </div>
      </div>
    </SnackbarProvider>
  );
}
