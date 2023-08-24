import { Link, useParams } from "react-router-dom";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../fixedComponent/ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { commerce } from "../../commerce/commerce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleProdText from "./SingleProductText";
import { useSelector, useDispatch } from "react-redux";
import { fetchProd } from "../../store/fetchData/fetchProd";
import { Stack, Skeleton } from "@mui/material";

export default function SingleProductPage({ data }) {
  const dataFetch = useSelector((s) => s.prod);
  let { prodId } = useParams();
  const prod = dataFetch.mainObj;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProd(commerce.products.retrieve(prodId)));
  }, [prodId]);
  console.log(prod);
  return (
    <>
      <section className="single-product">
        <div className="single-prod-top">
          <SingleProdTop data={data} id={prodId} />
        </div>
        <div className="container mx-auto">
          <div className="single-prod-container lap:flex gap-10">
            <div className="swiper-width">
              {dataFetch.loading ? (
                <Stack spacing={1}>
                  <Skeleton variant="rounded" width={"100%"} height={600} />
                  <div className="flex gap-4">
                    <Skeleton variant="rounded" width={"25%"} height={100} />
                    <Skeleton variant="rounded" width={"25%"} height={100} />
                    <Skeleton variant="rounded" width={"25%"} height={100} />
                    <Skeleton variant="rounded" width={"25%"} height={100} />
                  </div>
                </Stack>
              ) : null}
              {dataFetch.loading === false ? (
                <SwiperSlider images={prod.assets} />
              ) : null}
            </div>
            <div className="prod-text ">
              {data.data ? (
                <SingleProdText arr={data.data} id={prodId} />
              ) : (
                <SingleProdTextSkeleton />
              )}
            </div>
          </div>
          {data.data ? <Description /> : null}
        </div>
      </section>
      <section className="related-prod ">
        <div className="container mx-auto">
          <h1>You might also like</h1>

          {data.data ? (
            <RelatedProd data={data.data} id={prodId} />
          ) : (
            <RelatedSkeleton />
          )}
        </div>
      </section>
    </>
  );
}
function SingleProdTop({ id, data }) {
  const dataArr = data.data;
  let selectedEle;
  if (dataArr) {
    selectedEle = dataArr.filter((e) => e.id === id)[0];
  }
  return (
    <div className="container mx-auto flex gap-3 items-center ">
      <Link to="/" className="a">
        Home
      </Link>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
      <Link to="/shop" className="a">
        Shop
      </Link>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
      <a>{selectedEle ? selectedEle.categories[0].name : "loading..."}</a>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="text-sm" />
      <a>{selectedEle ? selectedEle.name : "loading..."}</a>
    </div>
  );
}
function SwiperSlider({ images }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="pagination-container  ${className}"><img src=${images[index].url} /></span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <img src={e.url} alt="swiper-img" />
            </SwiperSlide>
          );
        })}
        <div
          className="swiper-left"
          onClick={() => {
            let leftBtn = document.querySelector(
              ".mySwiper .swiper-button-prev"
            );
            leftBtn.click();
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </div>
        <div
          className="swiper-right"
          onClick={() => {
            let rightBtn = document.querySelector(
              ".mySwiper .swiper-button-next"
            );

            rightBtn.click();
          }}
        >
          {" "}
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      </Swiper>
    </>
  );
}
function Description() {
  const [data, setData] = useState("details");
  const object = {
    details:
      "Praesent commodo , vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.    ",
    info: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et  vestibulum scelerisque  nisl consectetur. ",
    delivery:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.  ",
  };
  const listArr = [
    {
      text: "Product Details",
      target: "details",
    },
    {
      text: "Additional Info",
      target: "info",
    },
    {
      text: "Delivery",
      target: "delivery",
    },
  ];
  return (
    <div className="discription">
      <ul className="flex gap-4 mb-4 mt-8">
        {listArr.map((el, index) => {
          return (
            <li
              className={index === 0 ? "active" : ""}
              onClick={(e) => {
                setData(el.target);
                document.querySelectorAll(".discription li").forEach((e) => {
                  e.classList.remove("active");
                });
                e.target.classList.add("active");
              }}
              key={el.target}
            >
              {el.text}
            </li>
          );
        })}
      </ul>
      <p>{object[data]}</p>
    </div>
  );
}
function RelatedProd({ data, id }) {
  let product = data.filter((e) => e.id === id)[0];
  let relatedArr = data.filter((el) => {
    return (
      el.categories[0].slug === product.categories[0].slug &&
      el.id !== product.id
    );
  });
  return (
    <>
      <RelatedSwiper className={"hidden lap:block"} num={3} data={relatedArr} />
      <RelatedSwiper
        className={"hidden tab:block lap:hidden"}
        num={2}
        data={relatedArr}
      />
      <RelatedSwiper className={"block tab:hidden"} num={1} data={relatedArr} />
    </>
  );
}
function RelatedSwiper({ data, num, className }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      // centeredSlides={true}
      slidesPerView={num}
      modules={[Pagination]}
      className={"related-swiper " + className}
    >
      {data.map((el) => {
        return (
          <SwiperSlide key={el.id}>
            <ProductCard e={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function SingleProdTextSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={"60%"} height={30} />
      <Skeleton variant="rectangular" width={80} height={20} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "8rem" }} />
      <Skeleton variant="rectangular" width={80} height={20} />
      <div className="flex gap-2 mt-3">
        <Skeleton variant="rounded" width={"15%"} height={30} />
        <Skeleton variant="rounded" width={"15%"} height={30} />
        <Skeleton variant="rounded" width={"15%"} height={30} />
        <Skeleton variant="rounded" width={"15%"} height={30} />
      </div>
      <Skeleton variant="rectangular" width={80} height={20} />
      <div className="flex gap-2 mt-3">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div className="flex gap-1 mt-3">
        <Skeleton variant="rounded" width={40} height={40} />
        <Skeleton variant="rounded" width={"100%"} height={40} />
        <Skeleton variant="rounded" width={40} height={40} />
      </div>
    </Stack>
  );
}
function RelatedSkeleton() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(i);
  }
  return (
    <div className="page-skeleton grid gap-10 lap:grid-cols-3 tab:grid-cols-2">
      {arr.map((e) => {
        return (
          <Stack spacing={0.5} key={e}>
            <Skeleton variant="rounded" width={"100%"} height={300} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rounded" width={"50%"} height={30} />
            <Skeleton variant="rounded" width={"20%"} height={20} />
          </Stack>
        );
      })}
    </div>
  );
}
