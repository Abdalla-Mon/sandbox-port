import { useEffect } from "react";

export default function AboutLanding() {
  useEffect(() => {
    let header = document.querySelector("header");
    header.style = "background-color:transparent";
  }, []);
  return (
    <section className="about-page">
      <div className="container mx-auto">
        <h1>Hello! This is Sandbox</h1>
        <p>A company turning ideas into beautiful things.</p>
      </div>
      <div className="about-landing relative">
        <img
          src={"./sandbox-about/about-landing.jpg"}
          alt={"group of people from different counteried smiling"}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fefefe"
            fillOpacity="1"
            d="M0,288L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fefefe"
            fillOpacity="1"
            d="M0,288L1440,192L1440,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </section>
  );
}
