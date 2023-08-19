import BlueBtn from "../fixedComponent/BlueBtn";
import data from "../../services.json";
export default function SDo() {
  return (
    <section className="s-do p-section">
      <div className="container mx-auto">
        <div className="lap:flex justify-between flex-row-reverse">
          <DoImgs />
          <DoText />
        </div>
      </div>
    </section>
  );
}

function DoText() {
  return (
    <div className="do-text flex flex-col justify-center">
      <h5 className="sub-h-color">WHAT WE DO?</h5>
      <h2 className="h-color f-lg mb-5 mt-4">
        The service we offer is specifically designed to meet your needs.
      </h2>
      <p className="text-color mb-6">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas
        faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et.
      </p>
      <div className="do-btn">
        <BlueBtn text={"More Detailt"} />
      </div>
    </div>
  );
}

function DoImgs() {
  const doImgs = data.do;
  return (
    <div className="do-imgs grid gap-6">
      <div className="upper-imgs tab:flex  grid gap-6">
        <Img e={doImgs[0]} />
        <Img e={doImgs[1]} />
      </div>
      <div className="lower-img  tab:flex grid gap-6">
        <Img e={doImgs[2]} />
        <Img e={doImgs[3]} />
      </div>
    </div>
  );
}

function Img({ e }) {
  return (
    <div className={e.id}>
      <div className={"img-text p-10 "} style={{ backgroundColor: e.color }}>
        <div className={"img-container"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507 512">
            {e.path.map((el, index) => {
              return <path d={el.d} className={el.class} key={index}></path>;
            })}
          </svg>
        </div>
        <h4 className="my-4">{e.heading}</h4>
        <p className="text-color">
          {e.id === "do-3"
            ? "Nulla vitae elit libero, a pharetra augue."
            : "  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta."}{" "}
        </p>
      </div>
    </div>
  );
}
