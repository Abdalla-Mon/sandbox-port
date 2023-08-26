import JustEle from "../fixedComponent/JustEle";

export default function AboutWho({ data }) {
  return (
    <>
      <section className="about-who">
        <div className="container mx-auto">
          <div className="flex flex-col lap:flex-row-reverse gap-8">
            <div className="about-w-imgs lap:w-2/4">
              <AboutImgs imgs={data.imgs} />
            </div>
            <div className="about-w-text lap:w-2/4">
              <AboutText icon={data.icon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function AboutImgs({ imgs }) {
  return (
    <div className="imgs-container tab:flex">
      <div className="left-img">
        <img src={imgs[0].img} alt={imgs[0].id} />
      </div>
      <div className="dots"></div>
      <div className="right-img">
        <img src={imgs[1].img} alt={imgs[1].id} />
      </div>
    </div>
  );
}
function AboutText({ icon }) {
  let textArrD = [
    "Aenean eu leo quam. Pellentesque ornare.",
    "Nullam quis risus eget urna mollis ornare.",
    "Donec id elit non mi porta gravida at eget.",
    "Nullam quis risus eget urna mollis ornare.",
  ];

  return (
    <>
      <svg viewBox={icon.viewbox} xmlns="http://www.w3.org/2000/svg">
        {icon.path.map((e, i) => {
          if (e === "circle") {
            return (
              <circle cx={e.cx} cy={e.cy} className={e.class} r={e.r} key={i} />
            );
          } else {
            return <path className={e.class} key={i} d={e.d} />;
          }
        })}
      </svg>
      <div className="left-text">
        <h2>Who Are We?</h2>
        <h3>
          We are a digital and branding company that believes in the power of
          creative strategy and along with great design.
        </h3>
        <h5>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </h5>
      </div>
      <JustEle textArr={textArrD} className={"about-ele"} />
    </>
  );
}
