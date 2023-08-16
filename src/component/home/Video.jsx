import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CloseBtn from "../fixedComponent/CloseBtn";

export default function Video() {
  const [show, setClose] = useState(true);
  return (
    <section className="video">
      <div className="container mx-auto ">
        <div className="video-container relative">
          <video autoPlay loop muted className="video-ele">
            <source src="./videos/movie3.mp4" type="video/mp4" />
            This browser does not support the video
          </video>
          <div className="video-icons" onClick={() => setClose(false)}>
            <FontAwesomeIcon icon="fa-solid fa-circle" className="circle" />
            <FontAwesomeIcon icon="fa-solid fa-play" className="video-player" />
          </div>
        </div>
      </div>
      {show ? null : <VideoPopup setClose={setClose} />}
    </section>
  );
}
function VideoPopup({ setClose }) {
  return (
    <section className="video-popup">
      <div className="container mx-auto relative">
        <div className="video-container-pop w-full">
          <video
            autoPlay
            controls
            className="video-ele-popup w-full"
            preload="auto"
            id="video1"
          >
            <source src="./videos/movie3.mp4" type="video/mp4" />
            This browser does not support the video
          </video>
        </div>
        <CloseBtn setClose={setClose} />
      </div>
    </section>
  );
}
