import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { commerce } from "../../commerce/commerce";
import CartTable from "./CartTable";
import Loader from "../fixedComponent/Loader";
import CartLoader from "./CartLoader";
export default function Cart() {
  const [cartData, setCartData] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  useEffect(() => {
    commerce.cart.contents().then((e) => setCartData(e));
    commerce.cart.request().then((e) => setSubTotal(e));
  }, []);
  console.log(subTotal);
  return (
    <>
      {cartData ? null : <CartLoader />}
      <section className="cart-page">
        {cartData ? (
          <>
            <TopCart />

            <div className="container mx-auto">
              <section className="cart-content">
                <div className="flex gap-10 flex-col lap:flex-row">
                  <div className="table-scrol">
                    {cartData ? (
                      <CartTable arr={cartData} setSubTotal={setSubTotal} />
                    ) : null}
                  </div>
                  <div className="sub-total-area">
                    <SubTotal arr={subTotal ? subTotal : null} />
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
function TopCart() {
  return (
    <div className=" product-top ">
      <div className="container mx-auto flex gap-3 items-center ">
        <Link to="/" className="a">
          Home
        </Link>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
        <a>Cart</a>
      </div>
    </div>
  );
}
function SubTotal({ arr }) {
  return (
    <div className="sub-total">
      <div className="order-summary">
        <h1>Order Summary</h1>
      </div>
      <div className="flex justify-between items-center">
        <h5>Subtotal</h5>
        <h6>
          {arr
            ? arr.subtotal.raw === 0
              ? "$ 00"
              : arr.subtotal.formatted_with_symbol
            : "Upadting..."}
        </h6>
      </div>
      <div className="flex justify-between items-center">
        <h5>Shibbing</h5>
        <h6>10</h6>
      </div>
      <div className="flex justify-between items-center">
        <h5>Total</h5>
        <h6>
          {arr
            ? arr.subtotal.raw === 0
              ? "$ 00"
              : `$${arr.subtotal.raw + 10}.00`
            : "Upadting..."}
        </h6>
      </div>
      <div className="checkout-btn">
        <Link className="checkout-link" to={"/checkout"}>
          {" "}
          Checkout
        </Link>
      </div>
    </div>
  );
}
