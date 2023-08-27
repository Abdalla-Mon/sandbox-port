import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function AboutSlider({ data }) {
  return (
    <section className="about-slider">
      <div className="container mx-auto">
        <div className="tab:flex gap-8 lap:gap-10 ">
          <div className="left tab:w-2/5 lap:w-3/6 hidden tab:block">
            <img src={data.img} alt={data.alt} />
          </div>
          <div className="right tab:w-3/5 lap:w-3/6 ">
            <Slider data={data.data} />
          </div>
        </div>
      </div>
    </section>
  );
}
function Slider({ data }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="team-swiper"
    >
      {data.map((e) => {
        return (
          <SwiperSlide key={e.id}>
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ribus rem
              vel labore nobis temporibus quaerat culpa iusto repellendus neque?
              Dolore, doloremque est?
            </q>
            <h5>{e.heading}</h5>
            <h6>{e.text}</h6>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
