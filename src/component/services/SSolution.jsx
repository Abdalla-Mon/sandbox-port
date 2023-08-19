import { useState } from "react";
import data from "../../services.json";
import { motion } from "framer-motion";
import JustEle from "../fixedComponent/JustEle";

export default function Solution() {
  return (
    <section className="solution p-section">
      <div className="container mx-auto">
        <UpperSolution />
        <LowerSolution />
      </div>
    </section>
  );
}

function UpperSolution() {
  const solBg = data["sol-bg"];
  return (
    <div className="sol grid lap:flex justify-between gap-8">
      <Img e={solBg[0]} className={solBg[0].id} />
      <UpperSolutionText />
    </div>
  );
}

function UpperSolutionText() {
  const [reached, setReaced] = useState(false);
  const solData = data["sol-data"];
  const colors = ["#3f78e0", "#fab758", "#f78b77", "#45c4a0"];
  return (
    <div className="upper-sol-text flex flex-col justify-center">
      <h1 className="h-color f-lg">
        We bring rapid solutions to make the life of our customers easier.
      </h1>
      {solData.map((e, index) => {
        return (
          <motion.div
            key={e.id}
            whileInView={index === 3 ? () => setReaced(true) : null}
          >
            <div className="flex justify-between">
              <p className="text-color">{e.heading}</p>
              <span>{e.width} %</span>
            </div>
            <div className="color-bar relative">
              <motion.div
                className="color-progess"
                initial={{ width: 0 }}
                animate={reached ? { width: `${e.width}%` } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ backgroundColor: colors[index] }}
              ></motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
function LowerSolution() {
  const solBg = data["sol-bg"];
  return (
    <div className="sol grid lap:flex justify-between gap-8 lap:flex-row-reverse mt-10">
      <Img e={solBg[1]} className={solBg[1].id} />
      <LowerSolutionText />
    </div>
  );
}
function LowerSolutionText() {
  const textArr = [
    "Aenean quam ornare. Curabitur blandit.    ",
    "Etiam porta euismod malesuada mollis.    ",
    "Nullam quis risus eget urna mollis ornare.   ",
    "Vivamus sagittis lacus vel augue rutrum.   ",
  ];
  return (
    <div className="lower-sol-text flex flex-col justify-center">
      <h1 className="h-color f-lg">
        We make your spending stress-free for you to have the perfect control.
      </h1>
      <p className="text-color my-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et.
      </p>
      <JustEle textArr={textArr} className="lap:grid lap:grid-cols-2 gap-1" />
    </div>
  );
}
function Img({ e, className }) {
  return (
    <div className={"img-container lap:mb-0 mb-5 " + className}>
      <img src={e.img} alt={e.id} />
    </div>
  );
}
