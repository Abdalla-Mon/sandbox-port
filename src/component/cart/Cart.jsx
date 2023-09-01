import { createContext, useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { commerce } from "../../commerce/commerce";
import CartTable from "./CartTable";
import CartLoader from "./CartLoader";
import CheckOut from "../checkout/Checkout";
import TopEle from "../fixedComponent/TopEle";

const AuthContext = createContext(null);

export const authFnc = () => {
  return useContext(AuthContext);
};

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(null);
  const [total, setTotal] = useState(null);
  const [popup, setPop] = useState(false);
  useEffect(() => {
    const fetchData = async function () {
      await commerce.cart.request().then((e) => {
        setSubTotal(e);
        setTotal(e.subtotal.raw);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  function settingPopup(e) {
    return setPop(e);
  }
  function settingTotal(e) {
    return setTotal(e);
  }

  return (
    <AuthContext.Provider
      value={{ popup, settingPopup, settingTotal, total, subTotal }}
    >
      <Routes>
        <Route
          index
          element={
            <>
              {loading ? <CartLoader /> : null}
              {total === 0 ? (
                <section className="cart-page">
                  <p className="empty-cart">Empty Cart</p>
                </section>
              ) : subTotal ? (
                <>
                  <section className="cart-page">
                    {" "}
                    <TopEle arr={["Home", "Cart"]} />
                    <div className="container mx-auto">
                      <section className="cart-content">
                        <div className="flex gap-10 flex-col lap:flex-row">
                          <div className="table-scrol">
                            {subTotal ? (
                              <CartTable arr={subTotal.line_items} />
                            ) : null}
                          </div>
                          <div className="sub-total-area">
                            <SubTotal />
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="checkout"
          element={
            <>
              {subTotal ? null : <CartLoader />}
              {subTotal ? <CheckOut subTotal={subTotal} /> : null}
            </>
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
}

function SubTotal() {
  const auth = authFnc();
  return (
    <div className="sub-total ">
      <div className="order-summary">
        <h1>Order Summary</h1>
      </div>
      <div className="flex justify-between items-center">
        <h5>Subtotal</h5>
        <h6 className="">
          {!auth.popup ? (
            auth.total === 0 ? (
              "$ 0"
            ) : (
              <>
                $ <span className="subTotal-h">{auth.total}</span>.00{" "}
              </>
            )
          ) : (
            "Upadting..."
          )}
        </h6>
      </div>
      <div className="flex justify-between items-center">
        <h5>Shibbing</h5>
        <h6>10</h6>
      </div>
      <div className="flex justify-between items-center">
        <h5>Total</h5>
        <h6>
          {!auth.popup ? (
            auth.total === 0 ? (
              "$ 0"
            ) : (
              <>
                $ <span className="subTotal-h2">{auth.total + 10}</span>
                .00{" "}
              </>
            )
          ) : (
            "Upadting..."
          )}
        </h6>
      </div>
      <div
        className="checkout-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <Link
          className="checkout-link"
          to={"checkout"}
          style={auth.total === 0 ? { opacity: 0.6 } : { opacity: 1 }}
        >
          {" "}
          Checkout
        </Link>
      </div>
    </div>
  );
}
