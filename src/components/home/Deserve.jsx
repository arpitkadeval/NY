import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../img/logos/1.png";
import img1 from "../../img/logos/2.png";
import img2 from "../../img/logos/3.png";
import img3 from "../../img/logos/4.png";
import img4 from "../../img/logos/5.png";
import img5 from "../../img/logos/6.png";
import { Zoom } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
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
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

swiperCore.use({
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
});
library.add(faPaperPlane, faHeart);
const Deserve = () => {
  swiperCore.use([
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
    Keyboard,
    Mousewheel,
    Scrollbar,
  ]);
  return (
    <>
      <div className="position-relative">
        <div className="shape-divider shape-divider-bottom shape-divider-fluid-x text-primary">
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"></path>
          </svg>
        </div>
      </div>

      <section className="section bg-primary">
        <div className="container text-center">
          <div className="section-heading">
            <h2 className="bold text-contrast">You deserve better</h2>
            <p className="lead text-light">
              With DashCore you will not only get a beautiful HTML template tou
              showoff your web, but a complete starter kit to bring your
              application to life right away
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mt-n9">
          <div className="row gap-y">
            <div className="col-md-6">
              <div className="rounded media bg-contrast shadow-lg p-4 lift-hover">
                <div className="shadow bg-primary text-contrast rounded-circle p-3 icon-xl mb-3 d-flex align-items-center justify-content-center">
                  <Zoom>
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="2x" />
                  </Zoom>
                </div>
                <h5 className="bold text-capitalize">easy to integrate</h5>
                <p className="text-secondary mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded media bg-contrast shadow-lg p-4 lift-hover">
                <div className="shadow bg-primary text-contrast rounded-circle p-3 icon-xl mb-3 d-flex align-items-center justify-content-center">
                  <Zoom>
                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2x" />
                  </Zoom>
                </div>
                <h5 className="bold text-capitalize">seamlessly solution</h5>
                <p className="text-secondary mb-0">
                  Ut enim ad minima veniam, quis nostrum voluptatem accusantium
                  ullam corporis obcaecati optio quasi qui.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ./Partners --> */}
      </section>
      <section className="partners">
        <div className="container pt-4">
          <div className="swiper-container">
            <Swiper
              autoplay={true}
              keyboard={true}
              mousewheel={true}
              zoom={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 992 ? 5 : "5"}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="swiper-container"
            >
              <div className="swiper-wrapper align-items-center">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img1} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img2} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img3} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img4} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={img5} className="img-responsivee" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        {/* <!-- Extend Core --> */}
      </section>
    </>
  );
};

export default Deserve;
