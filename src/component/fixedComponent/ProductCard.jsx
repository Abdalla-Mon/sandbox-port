import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating, Skeleton } from "@mui/material";
import { commerce } from "../../commerce/commerce";

import { closeSnackbar, enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ProductCard({ e }) {
  const [loading, setLoading] = useState(true);
  const ref = useRef();

  const source = e.image.filename.slice(0, -3) + "webp";
  useEffect(() => {
    if (ref?.current?.height < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [ref?.current?.height]);
  const message = "Added to cart";
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
  function addToCart(id) {
    commerce.cart.add(id, 1);
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

  return (
    <div className="product-card w-fit flex flex-col">
      <div className="card-img relative ">
        {loading ? (
          <Skeleton variant="rounded" width={"100%"} height={300} />
        ) : null}

        <img
          className={e.image.id}
          src={"./shop/" + source}
          alt={e.name}
          loading="lazy"
          ref={ref}
          onLoad={() => setLoading(false)}
        />

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
          <div
            className="inspect-icon"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Link to={"/shop/single-product/" + e.id}>
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
  );
}
