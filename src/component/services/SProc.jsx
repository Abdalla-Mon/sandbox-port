import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../fixedComponent/FixedHeading";
import { useRef, useState } from "react";
import data from "../../services.json";
const h1 =
  "Find out everything you need to know about creating a business process model";
const h4 = "OUR PROCESS";

export default function SProc() {
  return (
    <>
      <Video />
      <section className="proc pb-20">
        <div className="container mx-auto">
          <Heading h1={h1} h4={h4} />
          <ServiceText />
        </div>
      </section>
    </>
  );
}
function Video() {
  const videoRef = useRef();
  const [close, setClose] = useState(false);
  return (
    <section className="video-section pt-20 pb-10">
      <div className="container mx-auto">
        <div className="video-container relative ">
          <video
            muted
            className="video-ele"
            onPause={(e) => {
              setClose(false);
              videoRef.current.removeAttribute("controls");
            }}
            onPlay={(e) => setClose(true)}
            ref={videoRef}
          >
            <source src="./videos/movie.mp4" type="video/mp4" />
            This browser does not support the video
          </video>
          {close ? null : (
            <div
              className="video-icons"
              onClick={() => {
                videoRef.current.play();
                videoRef.current.setAttribute("controls", "");
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-circle" className="circle" />
              <FontAwesomeIcon
                icon="fa-solid fa-play"
                className="video-player"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceText() {
  let proc = data.proc;

  return (
    <div className="service-lower grid gap-8 tab:grid-cols-3">
      {proc.map((e) => {
        return (
          <div className={"text-center " + e.id} key={e.id}>
            <svg viewBox="0 0 512 465.5" xmlns="http://www.w3.org/2000/svg">
              {e.path.map((el, index) => {
                if (el.d === "circle") {
                  return (
                    <circle
                      key={index}
                      cx={el.cx}
                      cy={el.cy}
                      r={el.r}
                      className={el.class}
                    />
                  );
                } else {
                  return <path className={el.class} d={el.d} key={index} />;
                }
              })}
            </svg>
            <h4 className="my-4 h-color">{e.heading}</h4>
            <p className="text-color">
              Etiam porta malesuada magna mollis euismod sem.
            </p>
          </div>
        );
      })}
    </div>
  );
}
