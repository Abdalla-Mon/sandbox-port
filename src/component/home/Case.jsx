import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../home-imgs.json";

import Heading from "../fixedComponent/FixedHeading";
const caseData = data.case;

const heading = {
  h4: "CASE STUDIES",
  h1: "Check out some of our awesome projects with creative ideas and great design.",
};

export default function Case() {
  return (
    <section className="case">
      <div className="container mx-auto">
        <Heading h1={heading.h1} h4={heading.h4} />
        <div className="grid tab:grid-cols-2 lap:grid-cols-3 gap-9">
          {caseData.map((e) => {
            return <Card key={e.id} e={e} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ e }) {
  return (
    <div className="card">
      <div className="img-container relative">
        <img src={e.img} alt={e.title} />
        <span className="absolute">Read More</span>
      </div>
      <div className="card-body">
        <h3>{e.heading}</h3>
        <p>{e.text}</p>
      </div>
      <div className="card-footer flex ">
        <div className="left flex mr-2 items-center">
          <FontAwesomeIcon
            icon="fa-regular fa-calendar-days"
            className="mr-1"
          />
          <h6>{e.date}</h6>
        </div>
        <div className="right flex items-center">
          <FontAwesomeIcon icon="fa-regular fa-file-lines" className="mr-1" />
          <h6>{e.subtitle}</h6>
        </div>
      </div>
    </div>
  );
}
