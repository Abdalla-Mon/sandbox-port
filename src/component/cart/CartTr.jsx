import { useEffect, useRef, useState } from "react";
import { commerce } from "../../commerce/commerce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authFnc } from "./Cart";
export default function TrTable({ el, increaseStop, setIncrease }) {
  const auth = authFnc();
  const remove = async (id, qty) => {
    console.log(1);
    let ele = document.querySelector("table ." + id);
    auth.settingPopup(true);
    setIncrease(true);
    await commerce.cart.remove(id);
    auth.settingTotal((e) => e - +totalRef.current.textContent);
    auth.settingPopup(false);
    setIncrease(false);
    ele.remove();
  };

  const ref = useRef();
  const totalRef = useRef();
  const [refShow, setRefShow] = useState(1);
  console.log(el);
  useEffect(() => {
    setRefShow(ref.current.textContent);
  }, []);
  async function click(id, price, type) {
    if (type === "dec") {
      ref.current.textContent = +ref.current.textContent - 1;
      auth.settingTotal((e) => e - price);
    } else {
      ref.current.textContent = +ref.current.textContent + 1;
      auth.settingTotal((e) => e + price);
    }

    setIncrease(true);

    totalRef.current.textContent = +ref.current.textContent * price;
    await commerce.cart.update(id, { quantity: +ref.current.textContent });

    setRefShow(ref.current.textContent);
    setIncrease(false);
  }
  return (
    <tr className={el.id}>
      <td className="img-container">
        <img src={"./shop/" + el.image.filename} alt={el.product_name} />
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
                increaseStop ? null : click(el.id, el.price.raw, "ince");
              }}
              icon="fa-solid fa-circle-chevron-up"
              style={
                ({ color: "#3f78e0" },
                increaseStop
                  ? { opacity: 0.5, cursor: "not-allowed", color: "#3f78e0" }
                  : { opacity: 1, color: "#3f78e0" })
              }
            />
            <FontAwesomeIcon
              onClick={() => {
                +refShow > 1 || increaseStop === false
                  ? click(el.id, el.price.raw, "dec")
                  : null;
              }}
              icon="fa-solid fa-circle-chevron-down"
              style={
                +refShow < 2 || increaseStop
                  ? { opacity: 0.5, cursor: "not-allowed", color: "#3f78e0" }
                  : { opacity: 1, color: "#3f78e0" }
              }
            />{" "}
          </div>
        </div>
      </td>
      <td className="prod-total">
        {" "}
        $<span ref={totalRef}>{el.line_total.raw}</span>.00
      </td>
      <td
        className="prod-remove"
        onClick={() => {
          increaseStop ? null : remove(el.id, el.line_total.raw);
        }}
        style={
          ({ color: "#3f78e0" },
          increaseStop
            ? { opacity: 0.5, cursor: "not-allowed", color: "#3f78e0" }
            : { opacity: 1, color: "#3f78e0" })
        }
      >
        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
      </td>
    </tr>
  );
}
