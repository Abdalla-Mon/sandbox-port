import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopEle from "../fixedComponent/TopEle";
import { useForm } from "react-hook-form";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Left from "./LeftCheckout";
import Right from "./RightCheckout";
import { commerce } from "../../commerce/commerce";
import { useNavigate } from "react-router-dom";
import { authFnc } from "../cart/Cart";
export const SubTotal = createContext("");
export default function CheckOut() {
  const form = useForm();
  const [formData, setFormData] = useState([]);
  const [review, setReview] = useState(false);
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const auth = authFnc();
  const subTotal = auth.subTotal;
  function submit(e) {
    setFormData(e);
    setReview(true);
  }
  return (
    <SubTotal.Provider value={{ formData, review }}>
      <section className="checkout">
        <TopEle arr={["Home", "Cart", "Checkout"]} />
        <section className="checkout-content">
          {review ? <Review /> : null}
          {subTotal.subtotal.raw < 1 && review !== null ? (
            <h1>Empty checkout</h1>
          ) : null}
          {subTotal.subtotal.raw > 0 && review !== null ? (
            <div className="container mx-auto">
              <form
                onSubmit={handleSubmit(submit)}
                className="checkout-flex gap-8 flex flex-col lap:flex-row"
                noValidate
              >
                <div className="left lap:w-2/3">
                  <Left register={register} errors={errors} />
                </div>
                <div className="right lap:w-1-3">
                  <Right />
                </div>
              </form>
            </div>
          ) : null}
        </section>
      </section>
    </SubTotal.Provider>
  );
}
function Review() {
  const [timer, setTimer] = useState(5);
  const { formData } = useContext(SubTotal);
  const navigate = useNavigate();

  console.log(formData);
  const ref = useRef(5);
  useEffect(() => {
    let intervel = window.setInterval(() => {
      if (ref.current < 1) {
        window.clearInterval(intervel);
        commerce.cart.refresh();
        navigate("/");
      } else {
        setTimer((e) => e - 1);
        ref.current--;
      }
      console.log(ref.current);
    }, 1000);
    return () => window.clearInterval(intervel);
  }, []);
  return (
    <div className="review">
      <div className="container mx-auto">
        <div className="review-data">
          <h1>Order Done </h1>
          <h2>
            Redirecting you to home after <span>{timer}</span>
            seconds
          </h2>
          <div className="flex gap-3 justify-between">
            <h4>Your Name:</h4>
            <p>
              {formData.pafirstName} {formData.pasecondName}
            </p>
          </div>
          <div className="flex gap-3 justify-between">
            <h4>Your card:</h4>
            <p>
              {formData.creditcard.slice(0, formData.creditcard.length - 4)}****
            </p>
          </div>
          <div>
            <h4>Your address:</h4>
            <p>{formData.paaddress}</p>
            <p>
              {formData.pacity},{formData.pacountery}
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
