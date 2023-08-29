import data from "../../home-imgs.json";
const aboutData = data.about;
import "normalize.css";
import BlueBtn from "../fixedComponent/BlueBtn";
import GridBox from "../fixedComponent/GridBox";
export default function About() {
  return (
    <section className="about">
      <div className="container mx-auto">
        <div className="about-flex lap:flex justify-between pb-8">
          <AboutImgs />
          <AboutText />
        </div>
        <LowerAbout />
        <div className="about-button mt-10 flex justify-center">
          <BlueBtn text="More Details" />
        </div>
      </div>
    </section>
  );
}

function AboutImgs() {
  return (
    <div className="about-imgs flex items-center flex-col gap-10">
      <div className="upper-imgs tab:flex-row   flex flex-col gap-10">
        <div>
          <img src={aboutData[0].img} alt="about-img" />
        </div>
        <div className="flex items-end">
          <img src={aboutData[1].img} alt="about-img" />
        </div>
      </div>
      <div className="lower-imgs">
        <img src={aboutData[2].img} alt="about-img" />
      </div>
    </div>
  );
}
function AboutText() {
  return (
    <div className="about-text flex flex-col justify-center">
      <h4>WHO ARE WE?</h4>
      <h2 className="mb-5">
        Company that believes in the power of creative strategy.
      </h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean lacinia bibendum nulla sed.
      </p>
      <div className="lower-text block justify-between lab:flex">
        <div className="left">
          <h2>99.7%</h2>
          <h5>Customer Satisfaction</h5>
        </div>
        <div className="right">
          <h2>12x</h2>
          <h5>Revenue Growth</h5>
        </div>
      </div>
    </div>
  );
}

const lowerAboutArr = [
  {
    heading: "Our Vision",
    text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.",
  },
  {
    heading: "Our Mission",
    text: "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.",
  },
  {
    heading: "Our Values",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.",
  },
];

function LowerAbout() {
  return (
    <div className="lower-about grid lap:grid-cols-3 gap-8">
      {lowerAboutArr.map((e, index) => {
        return (
          <GridBox
            e={e}
            left={
              <div className="left">
                <span>{index + 1}</span>
              </div>
            }
          />
        );
      })}
    </div>
  );
}
