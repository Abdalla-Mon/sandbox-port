import data from "../../home-imgs.json";
import GridBox from "../fixedComponent/GridBox";
const serviceData = data.services;

export default function Services() {
  return (
    <section className="services">
      <div className="container mx-auto">
        <h4 className="text-center">OUR SERVICES</h4>
        <h1 className="text-center">
          The full service we are offering is specifically designed to meet your
          business needs.
        </h1>
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
