import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import { commerce } from "../../commerce/commerce";

import {
  MaterialDesignContent,
  SnackbarProvider,
  closeSnackbar,
  enqueueSnackbar,
} from "notistack";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ProductCard({ e }) {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#ffffff ",
      color: "#343f52",
    },
  }));
  function addToCart(id) {
    const cartItem = document.querySelectorAll(".cart-items")[0];
    const cartItem2 = document.querySelectorAll(".cart-items")[1];
    cartItem.innerHTML = +cartItem.innerHTML + 1;
    cartItem2.innerHTML = +cartItem.innerHTML;
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
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 2000,
      action,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
    commerce.cart.add(id, 1);
  }
  const message = "Added to cart";

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      Components={{
        success: StyledMaterialDesignContent,
      }}
    >
      <div className="product-card w-fit flex flex-col">
        <div className="card-img relative ">
          <img src={e.image.url} alt={e.name} />
          <div
            onClick={() => addToCart(e.id)}
            className="add-to-cart font-bold text-lg flex justify-center items-center p-4 absolute"
          >
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="mr-1" />{" "}
            Add to cart
          </div>
          <div className="right-icons p-4 absolute pt-5 ">
            <div className="love-icon">
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="inspect-icon">
              <Link to={"/" + e.id}>
                <FontAwesomeIcon icon="fa-regular fa-eye"></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body pt-8">
          <div className="flex justify-between items-center">
            <h5>{e.categories[0].name}</h5>
            <Rating name="read-only" value={5} readOnly />
          </div>
          <h2 className="card-name py-2 text-3xl font-bold">{e.name}</h2>
          <h6> $ {e.price.formatted}</h6>
        </div>
      </div>
    </SnackbarProvider>
  );
}
