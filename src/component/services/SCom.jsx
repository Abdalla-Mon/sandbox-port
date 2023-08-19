import Heading from "../fixedComponent/FixedHeading";
const h1 =
  "We are trusted by over 5000+ clients. Join them now and grow your business.";
const h4 = "JOIN OUR COMMUNITY";

const comData = [
  {
    id: "com-1",
    num: 7518,
    text: "Completed Projects ",
  },
  {
    id: "com-2",
    num: 5472,
    text: "Satisfied Customers ",
  },
  {
    id: "com-3",
    num: 2184,
    text: "Expert Employees ",
  },
];
export default function SCom() {
  return (
    <section className="p-section com">
      <div className="container mx-auto">
        <Heading h1={h1} h4={h4} />
        <div className="grid com-content gap-6 tab:grid-cols-3">
          {comData.map((e) => {
            return (
              <div className={"com-el text-center " + e.id} key={e.id}>
                <h3>{e.num}</h3>
                <p>{e.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
