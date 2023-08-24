import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { commerce } from "../../commerce/commerce";
import { useEffect, useRef, useState } from "react";

export default function CartTable({ arr, setSubTotal }) {
  const headTable = ["Product", "", "Price", "Quantity", "Total", ""];
  return (
    <table>
      <thead>
        <tr>
          {headTable.map((e) => {
            return <th key={e}>{e}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {arr.map((el) => {
          return <TrTable el={el} key={el.id} setSubTotal={setSubTotal} />;
        })}
      </tbody>
    </table>
  );
}

function TrTable({ el, setSubTotal }) {
  function remove(id, qty) {
    setSubTotal(null);

    let ele = document.querySelector("table ." + id);
    ele.remove();
    commerce.cart.remove(id);
    window.setTimeout(() => {
      commerce.cart.request().then((e) => setSubTotal(e));
    }, 5);
  }
  const ref = useRef();
  const totalRef = useRef();
  const [refShow, setRefShow] = useState(1);
  useEffect(() => {
    setRefShow(ref.current.textContent);
  }, []);

  function click(id, price, type) {
    setSubTotal(null);

    if (type === "dec") {
      ref.current.textContent = +ref.current.textContent - 1;
    } else {
      ref.current.textContent = +ref.current.textContent + 1;
    }

    totalRef.current.textContent = `$${+ref.current.textContent * price}.00`;

    commerce.cart.update(id, { quantity: +ref.current.textContent });

    setRefShow(ref.current.textContent);
    window.setTimeout(() => {
      commerce.cart.request().then((e) => setSubTotal(e));
    }, 5);
  }
  return (
    <tr className={el.id}>
      <td className="img-container">
        <img src={el.image.url} alt={el.product_name} />
      </td>
      <td className="prod-name">
        <h3>{el.product_name}</h3>
        <p>Color : black</p>
        <p>size : m</p>
      </td>
      <td className="prod-price">{el.price.formatted_with_symbol}</td>
      <td className="prod-qty">
        <div className="flex gap-4 justify-center items-center">
          <p ref={ref}>{el.quantity}</p>
          <div className="qty-icons">
            <FontAwesomeIcon
              onClick={() => {
                click(el.id, el.price.raw, "ince");
              }}
              icon="fa-solid fa-circle-chevron-up"
              style={{ color: "#3f78e0" }}
            />
            <FontAwesomeIcon
              onClick={() => {
                +refShow > 1 ? click(el.id, el.price.raw, "dec") : null;
              }}
              icon="fa-solid fa-circle-chevron-down"
              style={
                +refShow < 2
                  ? { opacity: 0.5, cursor: "not-allowed", color: "#3f78e0" }
                  : { opacity: 1, color: "#3f78e0" }
              }
            />{" "}
          </div>
        </div>
      </td>
      <td className="prod-total" ref={totalRef}>
        {" "}
        {el.line_total.formatted_with_symbol}
      </td>
      <td
        className="prod-remove"
        onClick={(e) => {
          remove(el.id, el.quantity);
        }}
      >
        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
      </td>
    </tr>
  );
}
