import { motion } from "framer-motion";
import Heading from "../fixedComponent/FixedHeading";
import { useState } from "react";
import data from "../../services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlueBtn from "../fixedComponent/BlueBtn";
const h1 =
  "We offer great prices, premium products and quality service for your business.";
const h4 = "OUR PRICING";

export default function Pricing() {
  return (
    <>
      <section className="pricing-top pt-20">
        <div className="container mx-auto">
          <Heading h1={h1} h4={h4} />
        </div>
      </section>
      <PricingBottom />
    </>
  );
}

function PricingBottom() {
  const [price, setPrice] = useState("true");
  const [fAnime, setFanime] = useState("false");
  return (
    <section className="pricing-bottom pb-20">
      <div className="container mx-auto">
        <div className="swiper-btn-container flex justify-center items-center">
          <p>Monthly</p>
          <div
            className="swiper-btn relative"
            onClick={() => {
              setPrice(!price);
              setFanime(!fAnime);
            }}
          >
            <motion.div
              className="circle"
              initial={
                price ? { left: 3, right: "auto" } : { left: "auto", right: 3 }
              }
              animate={
                price ? { left: 3, right: "auto" } : { left: "auto", right: 3 }
              }
            ></motion.div>
          </div>
          <p>Yearly</p>
        </div>
        <PricingCardContainer t={price} d={fAnime} />
      </div>
    </section>
  );
}
function PricingCardContainer({ t, d }) {
  const pricingData = data.pricing;
  return (
    <div className="grid gap-8 tab:grid-cols-2 lap:grid-cols-3">
      {pricingData.map((e, index) => {
        return <PricingCard e={e} t={t} key={index} d={d} />;
      })}
    </div>
  );
}
function PricingCard({ e, t, d }) {
  const path = e.path;
  const arr = ["Project", "API Access", "Storage", "Reports", "Support"];
  return (
    <div className={"card " + e.id}>
      <div className={"card-padding "}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 412.9"
          className="mb-2"
        >
          {path.map((e, i) => {
            if (e === "circle") {
              return (
                <circle
                  cx={e.cx}
                  cy={e.cy}
                  className={e.class}
                  r={e.r}
                  key={i}
                />
              );
            } else {
              return <path className={e.class} key={i} d={e.d} />;
            }
          })}
        </svg>
        <h3 className="mb-4 mt-2">{e.heading} plan</h3>
        <div className="price-swapp">
          <motion.div
            initial={{ marginTop: -30, opacity: 0 }}
            animate={
              t
                ? { marginTop: 0, opacity: 1, display: "flex" }
                : { opacity: 0, display: "none" }
            }
            className="flex gap-1"
          >
            <h6>$</h6> <span> {e.price[0]}</span> <p>/mo</p>
          </motion.div>
          <motion.div
            initial={{ marginTop: -30, opacity: 0 }}
            animate={
              t
                ? { opacity: 0, display: "none" }
                : { marginTop: 0, opacity: 1, display: "flex" }
            }
            className="flex gap-1"
          >
            <h6>$</h6> <span> {e.price[1]}</span> <p>/mo</p>
          </motion.div>
        </div>
        <div className="price-card-lower my-7">
          {e.plan.map((e, index) => {
            return (
              <div className="flex mb-2 gap-2 " key={index}>
                <Check />
                <div className="right flex">
                  <h5>{e}</h5>
                  <p>{arr[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-btn w-fit">
          <BlueBtn text={"Choose Plan"} />
        </div>
      </div>
    </div>
  );
}
function Check() {
  return (
    <div className="check flex justify-center items-center">
      <FontAwesomeIcon icon="fa-solid fa-check" />
    </div>
  );
}

//   )
//   : (
//     <motion.div
//       initial={{ marginTop: -20, opacity: 0 }}
//       animate={t ? { opacity: 0 } : { marginTop: 0, opacity: 1 }}
//       className="flex gap-1"
//     >
//       <h6>$</h6> <span> {e.price[1]}</span> <p>/yr</p>
//     </motion.div>
//   )}
