import { Route, Routes, NavLink } from "react-router-dom";
import data from "../../home-imgs.json";
import GridBox from "../fixedComponent/GridBox";
import Heading from "../fixedComponent/FixedHeading";
import JustEle from "../fixedComponent/JustEle";
import BlueBtn from "../fixedComponent/BlueBtn";
import { useState } from "react";
const whyUs = data.whyus;
const routeArr = data.whyus2;

const head = {
  h1: "Here are a few reasons why our customers choose Sandbox.",
  h4: "WHY CHOOSE SANDBOX?",
};

export default function ChooseUs() {
  return (
    <>
      <section className="choose-us">
        <div className="container mx-auto">
          <Heading h1={head.h1} h4={head.h4} />
          <div className="grid-links grid lap:grid-cols-3 gap-8">
            <ChooseLinks />
          </div>
          <div className="routes">
            <ChooseRoutes />
          </div>
        </div>
      </section>
    </>
  );
}

function ChooseRoutes() {
  let firstPath = whyUs[0].heading;

  return (
    <Routes>
      <Route index element={<RouterEle path={firstPath} id={"wy-1"} />} />

      {whyUs.map((e) => {
        return (
          <Route
            path={e.heading}
            element={<RouterEle id={e.id} key={e.heading} />}
          />
        );
      })}
    </Routes>
  );
}

function ChooseLinks() {
  const [active, setActive] = useState(true);
  return (
    <>
      {whyUs.map((e) => {
        return (
          <NavLink
            className={
              e.id === "wy-1"
                ? active
                  ? "why-link active"
                  : "why-link"
                : "why-link"
            }
            to={e.heading}
            key={e.heading}
            onClick={() => setActive(false)}
          >
            <GridBox e={e} left={<Left e={e} />} />
          </NavLink>
        );
      })}
    </>
  );
}
function Left({ e }) {
  return (
    <div className="left">
      <img src={e.img} />
    </div>
  );
}

function RouterEle({ id }) {
  let filterEle = routeArr.filter((e) => e.id === id)[0];

  return (
    <div
      className={
        filterEle.id === "wy-2"
          ? "route-ele lap:flex justify-between flex-row-reverse"
          : "route-ele lap:flex justify-between"
      }
    >
      <GridImgs el={filterEle} />
      <div className="router-ele-text">
        <h4>{filterEle.heading}</h4>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
          nulla non metus auctor fringilla. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus. Nullam quis risus eget urna.
        </p>
        <JustEle />
        <BlueBtn text={"Learn More"} />
      </div>
    </div>
  );
}
function GridImgs({ el }) {
  return (
    <div className="flex justify-between img-content">
      <div className={el.id === "wy-2" ? "left-imgs smaller " : "left-imgs"}>
        {el.leftCol.map((e, index) => {
          return (
            <div className={e.subClass} key={index + 8}>
              <img src={e.img} className={e.class} />
            </div>
          );
        })}
      </div>
      <div className={el.id === "wy-2" ? "right-imgs wider" : "right-imgs"}>
        {el.rightCol.map((e, index) => {
          return (
            <div className={e.subClass} key={index}>
              <img src={e.img} className={e.class} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
