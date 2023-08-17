import Heading from "../fixedComponent/FixedHeading";
import BlueBtn from "../fixedComponent/BlueBtn";
import data from "../../home-imgs.json";
import WhiteBtn from "../fixedComponent/WhiteBtn";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const teamData = data.team;

const head = {
  h1: "Save your time and money by choosing our professional team. ",
  h4: "OUR TEAM",
};
const head2 = {
  h1: "We are trusted by over 5000+ clients. Join them now and grow your business.",
  h4: "JOIN OUR COMMUNITY",
};

export default function OuTeam() {
  return (
    <>
      <section className="our-team">
        <div className="container mx-auto">
          <Heading h1={head.h1} h4={head.h4} />
          <p className="text-center mb-6">
            Curabitur blandit tempus porttitor. Maecenas faucibus mollis
            interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </p>
          <div className="team-btn flex justify-center ">
            <BlueBtn text={"Read More"} />
          </div>
        </div>
      </section>
      <section className="com-sec">
        <div className="container mx-auto">
          <img src={teamData["team-back"].img} alt={teamData["team-back"].id} />
        </div>
        <OurCommunity />
      </section>
    </>
  );
}
function OurCommunity() {
  return (
    <section className="commnuity">
      <div className="container mx-auto">
        <div className="swiper-container">
          <TeamSlider />
        </div>
        <Heading h1={head2.h1} h4={head2.h4} />
        <div className="com-btn flex justify-center">
          <WhiteBtn text={"Join Us"} />
        </div>
      </div>
    </section>
  );
}

function TeamSlider() {
  const tm = teamData.tm;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="team-swiper"
      >
        {tm.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                esse, cupiditate, magni corporis maxime alias quisquam ipsa quis
                atque.
              </q>
              <div className="team-swiper-ele flex justify-center items-center">
                <div className="left mr-3">
                  <img src={e.img} alt={e.heading} />
                </div>
                <div className="right">
                  <h5>{e.heading}</h5>
                  <p>{e.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
