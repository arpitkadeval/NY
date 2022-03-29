import React, { useEffect, useRef, useState } from "react";
import img from "../../img/smart-business/icons/chat.svg";
import img1 from "../../img/smart-business/icons/strategy.svg";
import img2 from "../../img/smart-business/icons/money.svg";
import img3 from "../../img/smart-business/icons/user.svg";
import img4 from "../../img/smart-business/icons/worldwide.svg";
import img5 from "../../img/smart-business/icons/like.svg";
import img6 from "../../img/smart-business/icons/graph.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Scrollbar,
  Zoom,
} from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/autoplay/package.json";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/keyboard/package.json";
import "swiper/components/mousewheel/package.json";
import "swiper/components/scrollbar/package.json";
import "swiper/components/zoom/package.json";

swiperCore.use([
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Scrollbar,
  Zoom,
]);

const Homecard = () => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const [slidesperview, setSlidesperview] = useState(4);
  swiperCore.use([
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
    Keyboard,
    Scrollbar,
    Zoom,
  ]);
  library.add(faLongArrowAltRight);
  document.addEventListener("scroll", () => {
    const nav = window.innerWidth;
    if (nav > 992) {
      setSlidesperview(4);
    } else if (nav < 768) {
      setSlidesperview(1);
    } else if (nav > 768) {
      setSlidesperview(3);
    }
  });
  return (
    <section className="section features-carousel b-b">
      <div className="container pt-0">
        <Swiper
          autoplay={true}
          keyboard={true}
          zoom={true}
          centeredSlides={true}
          slidesPerView={slidesperview}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          onSwiper={setSwiper}
          className="swiper-container"
        >
          <div className="swiper-wrapper px-1">
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Social
                      <br />
                      <span className="bold">Integration</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img1} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Design
                      <br />
                      <span className="bold">Strategy</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img2} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Save
                      <br />
                      <span className="bold">Money</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img3} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Business
                      <br />
                      <span className="bold">Brain</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img4} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Worldwide
                      <br />
                      <span className="bold">Support</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img5} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Social
                      <br />
                      <span className="bold">Settings</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide px-2 px-sm-1">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="rounded-circle bg-light p-3 d-flex align-items-center justify-content-center shadow icon-xl">
                      <img src={img6} className="img-responsive" alt="" />
                    </div>
                    <h4 className="mt-4">
                      Insightful
                      <br />
                      <span className="bold">Statistics</span>
                    </h4>
                    <p>
                      Vulputate mi habitant curae; per facilisis. Ornare.
                      Imperdiet curabitur, enim venenatis donec consequat
                      adipiscing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div
            className="text-primary features-nav features-nav-next"
            ref={nextRef}
          >
            <span className="text-uppercase small" ref={nextRef}>
              Next
            </span>
            <FontAwesomeIcon
              icon="fas fa-long-arrow-alt-right"
              className="features-nav-icon"
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Homecard;
