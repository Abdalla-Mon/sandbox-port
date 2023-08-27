import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
export default function AboutSave({ data }) {
  let body = document.body;
  const [bodyWidth, setWidth] = useState(body.clientWidth);
  useEffect(() => {
    body.onresize = function () {
      setWidth(body.clientWidth);
    };
  }, [body.clientWidth]);
  console.log(bodyWidth);
  return (
    <section className="about-save">
      <div className="container mx-auto">
        <FontAwesomeIcon icon={data.icon} />
        <h1>Save your time and money by choosing our professional team.</h1>
        <Slider
          data={data.data}
          num={
            bodyWidth < 768
              ? 1
              : bodyWidth > 767 && bodyWidth < 992
              ? 2
              : bodyWidth > 991 && bodyWidth < 1200
              ? 3
              : 4
          }
        />
      </div>
    </section>
  );
}
function Slider({ data, num }) {
  return (
    <Swiper
      spaceBetween={20}
      // centeredSlides={true}
      slidesPerView={num}
      className={"about-swiper-2 "}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data.map((e) => {
        return (
          <SwiperSlide key={e.id}>
            <SliderELe e={e} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function SliderELe({ e }) {
  return (
    <div className="slide">
      <div className="avater">
        <img src={e.img} alt={e.id} />
      </div>
      <h3>{e.heading}</h3>
      <h5 className="my-1">{e.text}</h5>
      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <div className="slide-icons flex gap-4">
        <FontAwesomeIcon
          icon="fa-brands fa-twitter"
          style={{ color: "#5daed5" }}
        />
        <FontAwesomeIcon
          icon="fa-brands fa-facebook-f"
          style={{ color: "#4470cf" }}
        />
        <FontAwesomeIcon
          icon="fa-brands fa-dribbble"
          style={{ color: "#e94d88" }}
        />
      </div>
    </div>
  );
}
