import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutCall() {
  return (
    <>
      <section className="upper-call">
        <div className="container mx-auto">
          <div className="call-icon justify-center flex flex-col tab:flex-row gap-10">
            <UpperCall />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fefefe"
            fillOpacity="1"
            d="M0,256L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="lower-call">
        <div className="container mx-auto">
          <LowerCall />
        </div>
      </section>
    </>
  );
}
function UpperCall() {
  const data = [
    {
      id: "i-1",
      heading: "7518",
      text: "Completed Projects      ",
      icon: "fa-solid fa-circle-check",
    },
    {
      id: "i-2",
      heading: "3472",
      text: "Satisfied Customers      ",
      icon: "fa-solid fa-user-tie",
    },
    {
      id: "i-3",
      heading: "2184",
      text: "Expert Employees      ",
      icon: "fa-solid fa-briefcase",
    },
    {
      id: "i-4",
      heading: "1200",
      text: "Awards Won      ",
      icon: "fa-solid fa-award",
    },
  ];

  return (
    <>
      {data.map((el) => {
        return (
          <div key={el.id} className="call-ele flex text-center flex-col ">
            <FontAwesomeIcon
              icon={el.icon}
              style={{
                color: "#8caeec",
                //   "--fa-secondary-color": "#8caeec",
                //   "--fa-secondary-opacity": "1",
              }}
            />
            <h2>{el.heading}</h2>
            <p>{el.text}</p>
          </div>
        );
      })}
    </>
  );
}
function LowerCall() {
  const data = [
    {
      id: "lc-1",
      icon: "fa-solid fa-location-dot",

      heading: "Address",
      text: `Moonshine St. 14/05 Light City
    ,London, United Kingdom`,
      text2: "",
    },
    {
      id: "lc-2",
      icon: "fa-solid fa-phone",
      heading: "Phone",
      text: "00 (123) 456 78 90",
      text2: "",
    },
    {
      id: "lc-3",
      icon: "fa-solid fa-envelope",
      heading: "mail",
      text: "sandbox@email.com",
      text2: "",
    },
  ];
  return (
    <div className="flex gap-10 lap:flex-row flex-col">
      <div className="left lap:w-3/6">
        <div className="img-container">
          <img
            src="./sandbox-about/about42x.webp"
            alt="man with red hair staring at the camera"
          />
        </div>
      </div>
      <div className="right lap:w-3/6">
        <FontAwesomeIcon
          icon="fa-solid fa-headset "
          style={{ color: "#8caeec" }}
        />
        <h2 className=" mt-2 mb-4">
          Convinced yet? Let&apos;s make something great together.
        </h2>
        {data.map((e) => {
          return <CallEle e={e} key={e.id} />;
        })}
      </div>
    </div>
  );
}
export function CallEle({ e }) {
  return (
    <div className="call-ele flex gap-6">
      <div className="left-call ">
        <FontAwesomeIcon
          icon={e.icon}
          style={{
            color: "#8caeec",
          }}
        />
      </div>
      <div className="right-call flex-1">
        <h5>{e.heading}</h5>
        <h6>{e.text}</h6>
        <h6>{e.text2}</h6>
      </div>
    </div>
  );
}
