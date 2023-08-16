import data from "../../home-imgs.json";
import Heading from "../fixedComponent/FixedHeading";
import GridBox from "../fixedComponent/GridBox";
const serviceData = data.services;
const heading = [
  "OUR SERVICES",
  "The full service we are offering is specifically designed to meet yourbusiness needs.",
];

export default function Services() {
  return (
    <section className="services">
      <div className="container mx-auto">
        <Heading h4={heading[0]} h1={heading[1]} />
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-8">
          {serviceData.map((e) => {
            return <GridBox e={e} left={<Left e={e} />} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Left({ e }) {
  return (
    <div className="left">
      <img src={e.img} alt={e.heading} />
    </div>
  );
}
