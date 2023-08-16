import WhiteBtn from "../fixedComponent/WhiteBtn";

export default function Landing() {
  return (
    <>
      <div className="home-landing flex items-center ">
        <div className="container mx-auto">
          <div className="content text-center ">
            <h2>HELLO! WE ARE SANDBOX</h2>
            <h1>
              We have considered our solutions to{" "}
              <span>
                <em>assist</em>
              </span>{" "}
              every stage of your growth.
            </h1>
            <div className="home-btn flex justify-center">
              <WhiteBtn text={"Explore now"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
