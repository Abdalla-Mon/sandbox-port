import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../home-imgs.json";
import GridBox from "../fixedComponent/GridBox";
import JustEle from "../fixedComponent/JustEle";
const moreImg = data.about[3];
export default function MoreAbout() {
  return (
    <section className="more-about">
      <div className="container mx-auto">
        <div className="lap:flex flex-row-reverse justify-between">
          <MoreAboutImg />
          <MoreAboutText />
        </div>
      </div>
    </section>
  );
}
const el = { heading: "25000+", text: "Happy Clients" };

function MoreAboutImg() {
  return (
    <div className="img-container">
      <img src={moreImg.img} alt={"about-img"} />
      <GridBox e={el} left={<Left />} />
      <div className="box hidden tab:block">
        <div className="curved-progress">
          <h6> 80%</h6>
        </div>
        <h5>Time Saved</h5>
      </div>
    </div>
  );
}
function Left() {
  return (
    <div className="left flex items-center justify-center">
      <FontAwesomeIcon icon="fa-regular fa-user" />
    </div>
  );
}

function MoreAboutText() {
  return (
    <div className="more-about-text flex justify-center flex-col">
      <h4>WHAT MAKES US DIFFERENT?</h4>
      <h2 className="mb-5">
        We make spending stress free so you have the perfect control.
      </h2>
      <p className="mb-8">
        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla
        non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere
        erat a ante venenatis.
      </p>
      <JustEle />
    </div>
  );
}
