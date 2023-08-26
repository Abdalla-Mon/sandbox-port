import BlueBtn from "../fixedComponent/BlueBtn";

export default function WorkingSteps({ data }) {
  return (
    <section className="control-svg relative">
      <section className="working-steps">
        <div className="container mx-auto">
          <svg viewBox={data.icon.viewbox} xmlns="http://www.w3.org/2000/svg">
            {data.icon.path.map((e, i) => {
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
          <h1>Here are 3 working steps to organize our business projects.</h1>
          <div className="stpes-container lap:flex lap:flex-row-reverse gap-8">
            <div className="right lap:w-3/6 flex flex-col justify-center">
              <StepsRight data={data.data} />
            </div>
            <div className="left lap:w-3/6">
              <StepsText />
            </div>
          </div>
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#edf2fc"
          fillOpacity="1"
          d="M0,160L1440,256L1440,320L0,320Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#edf2fc"
          fillOpacity="1"
          d="M0,224L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
function StepsText() {
  return (
    <div className="flex flex-col ">
      <div className="left-text">
        <h2>How It Works?</h2>
        <h3>
          Find out everything you need to know and more about how we create our
          business process models.
        </h3>
        <h5>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
          urna mollis ornare.
        </h5>
        <h5>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
          consectetur. Sed posuere consectetur est at lobortis. Vestibulum id
          ligula porta felis.
        </h5>{" "}
      </div>
      <BlueBtn text="Learn More" />
    </div>
  );
}
function StepsRight({ data }) {
  return (
    <>
      {data.map((e, index) => {
        return <Ele e={e} index={index} />;
      })}
    </>
  );
}
function Ele({ e, index }) {
  return (
    <div className={"ele  " + e.id}>
      <div className="flex gap-3 items-center">
        <div className="left-ele">{index + 1}</div>
        <div className="right-ele">
          <h4>{e.heading}</h4>
          <p>{e.text}</p>
        </div>
      </div>
    </div>
  );
}
