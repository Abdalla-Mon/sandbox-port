import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SubTotal } from "./Checkout";
import { authFnc } from "../cart/Cart";

export default function Right() {
  const [shipping, setShipping] = useState(0);
  return (
    <>
      <OrderSummary />
      <Shipping setShipping={setShipping} />
      <TotalPrice shipping={shipping} />
    </>
  );
}
function OrderSummary() {
  const auth = authFnc();
  const subTotal = auth.subTotal;

  return (
    <>
      {subTotal ? (
        <>
          <div className="line-items">
            <h1>Order Summary</h1>
            {subTotal.line_items.map((e) => {
              return (
                <div className="line-item flex gap-6 lap:gap-5" key={e.id}>
                  <div className="img-container">
                    <img src={e.image.url} alt={e.image.filename} />
                  </div>
                  <div className="product-title">
                    <span>{e.quantity}</span>
                    {e.product_name}
                  </div>
                  <div className="product-price">$ {e.line_total.raw}.00</div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}
function Shipping({ setShipping }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="check-flex flex gap-1 flex-col mb-3 mt-3 shipping">
      <label
        className="check-label gap-4"
        onClick={() => {
          setShipping(0);
          setChecked(true);
        }}
      >
        <input
          type="radio"
          name="setshipping"
          id="free-standred-check"
          checked={checked}
        />
        <div>
          <span className="block">Free Standred delivery</span>
          <p>Shipment may take 5-6 business days</p>
        </div>
      </label>
      <label
        className="check-label gap-4"
        onClick={() => {
          setShipping(10);
          setChecked(false);
        }}
      >
        <input type="radio" name="setshipping" id="express-check" />
        <div>
          <span className="block">$10 - Express delivery</span>
          <p>Shipment may take 2-3 business days</p>
        </div>
      </label>
    </div>
  );
}
function TotalPrice({ shipping }) {
  const auth = authFnc();
  const subTotal = auth.subTotal;
  return (
    <>
      {subTotal ? (
        <div className="sub-total ">
          <div className="flex justify-between items-center">
            <h5>Subtotal</h5>
            <h6 className="">
              $ <span className="subTotal-h">{subTotal.subtotal.raw}</span>.00{" "}
            </h6>
          </div>
          <div className="flex justify-between items-center">
            <h5>Shibbing</h5>
            <h6>{shipping}</h6>
          </div>
          <div className="flex justify-between items-center">
            <h5>Total</h5>
            <h6>
              ${" "}
              <span className="subTotal-h2">
                {subTotal.subtotal.raw + shipping}.00
              </span>
            </h6>
          </div>
          <div className="checkout-btn">
            <button type="submit"> Place Order</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
