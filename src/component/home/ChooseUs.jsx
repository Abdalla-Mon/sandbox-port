import { Route, Routes, NavLink, Outlet } from "react-router-dom";
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
  const [id, setId] = useState("wy-1");
  return (
    <>
      <section className="choose-us">
        <div className="container mx-auto">
          <Heading h1={head.h1} h4={head.h4} />
          <div className="grid-links grid lap:grid-cols-3 gap-8">
            <ChooseLinks setId={setId} />
          </div>
          <div className="routes">
            <RouterEle id={id} />
          </div>
        </div>
      </section>
    </>
  );
}

export function ChooseRoutes() {
  let firstPath = whyUs[0].heading;

  return (
    <Routes>
      {/* <Route path="" element={<ChooseUs />}> */}
      <Route index element={<RouterEle id={"wy-1"} />} />
      <Route path={"wy-1"} element={<RouterEle id={"wy-1"} />} />
      <Route path={"wy-2"} element={<RouterEle id={"wy-2"} />} />
      <Route path={"wy-3"} element={<RouterEle id={"wy-3"} />} />
      {/* </Route> */}
    </Routes>
  );
}

function ChooseLinks({ setId }) {
  const el = ["wy-1", "wy-2", "wy-3"];
  return (
    <>
      {whyUs.map((e, index) => {
        return (
          <a
            className={index === 0 ? "active why-link" : " why-link"}
            key={e.heading}
            onClick={(f) => {
              setId(el[index]);
              document.querySelectorAll(".why-link").forEach((f) => {
                f.classList.remove("active");
              });
              document
                .querySelectorAll(".why-link")
                [index].classList.add("active");
            }}
          >
            <GridBox e={e} left={<Left e={e} />} />
          </a>
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
