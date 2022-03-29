import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import img from "../../img/integration/blossom.svg";
import img1 from "../../img/integration/dockbit.svg";
import img2 from "../../img/integration/zapier.svg";
import img3 from "../../img/integration/bitnami.svg";
import img4 from "../../img/integration/slack.svg";
import img5 from "../../img/integration/monero.svg";
import img6 from "../../img/integration/dropbox.svg";
import Test1 from "../../img/smart-business/reviews/1.jpg";
import Test3 from "../../img/smart-business/reviews/2.jpg";
import Test4 from "../../img/smart-business/reviews/signature.svg";
import Test5 from "../../img/smart-business/reviews/3.jpg";
import Test6 from "../../img/smart-business/reviews/signature.svg";
import Test7 from "../../img/smart-business/reviews/4.jpg";
import Test8 from "../../img/smart-business/reviews/signature.svg";
import Test9 from "../../img/smart-business/reviews/signature.svg";
import Test10 from "../../img/smart-business/reviews/5.jpg";
import Test11 from "../../img/smart-business/reviews/6.jpg";
import Test12 from "../../img/smart-business/reviews/signature.svg";
import Test13 from "../../img/smart-business/reviews/7.jpg";
import Test14 from "../../img/smart-business/reviews/signature.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

swiperCore.use({
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Scrollbar,
});
const Extend = () => {
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

  swiperCore.use([
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
    Keyboard,
    Scrollbar,
  ]);
  library.add(
    faQuoteLeft,
    faQuoteRight,
    faLongArrowAltLeft,
    faLongArrowAltRight
  );
  return (
    <>
      <section className="section extending-core border-top bg-light edge bottom-right">
        <div className="shapes-container">
          <div className="shape shape-circle">
            <div></div>
          </div>
        </div>
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-lg-6">
              <div className="section-heading">
                <p className="text-primary bold small text-uppercase">
                  enterprise integration
                </p>
                <h2 className="bold">Extend DashCore</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi ipsum iste iure nihil non obcaecati quasi, sit?
                  Aperiam asperiores atque, commodi debitis fugiat in nemo optio
                  sint velit. Pariatur, sint!
                </p>
              </div>
              <a
                href="#"
                className="btn btn-rounded btn-outline-primary bw-2 me-3"
              >
                Know More
              </a>
              <a
                href="#"
                className="btn btn-rounded btn-primary bw-2 bold text-contrast"
              >
                Register Account
              </a>
            </div>
            <div className="col-lg-6">
              <div className="icons-wrapper position-relative">
                <div
                  className="floating icon icon-xl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "100%", top: "30%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-xxl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "60%", top: "-10%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img1} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-xxl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "25%", top: "0%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img2} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-2xl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "0%", top: "50%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img3} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-2xxl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "23%", top: "70%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img4} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-xxl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "65%", top: "44%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img5} className="img-responsive" alt="" />
                  </Fade>
                </div>
                <div
                  className="floating icon icon-xl bg-contrast rounded-circle p-3 shadow m-0 absolute d-flex justify-content-center align-items-center"
                  style={{ left: "95%", top: "83%" }}
                >
                  <Fade right duration={2000}>
                    <img src={img6} className="img-responsive" alt="" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- User Reviews --> */}
      </section>
      <section className="section singl-testimonial">
        <div className="container pt-8 bring-to-front">
          <div className="swiper-container pb-0 pb-lg-8">
            <Swiper
              autoplay={true}
              keyboard={true}
              zoom={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 992 ? 1 : "1"}
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
              className="swiper-container pb-0 pb-lg-8"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test1}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid amet aspernatur, autem deserunt
                            distinctio dolores eius, exercitationem facilis
                            inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>

                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Lorem Team,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test4}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>

                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test3}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Lorem Team,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test4}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>

                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>

                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test5}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Ipsum Team,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test6}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test7}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Priscilla Campbell,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test9}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test10}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Edith Fisher,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test8}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test11}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Kenneth Reyes,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test12}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row gap-y align-items-center">
                      <div className="col-lg-6">
                        <figure className="testimonial-img ms-md-auto">
                          <img
                            src={Test13}
                            className="img-responsive rounded shadow-lg"
                            alt="..."
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 ms-md-auto">
                        <div className="user-review text-center italic bg-primary text-contrast rounded shadow-lg py-5 px-4 px-lg-6">
                          <blockquote className="regular py-4">
                            <FontAwesomeIcon icon="fas fa-quote-left" /> Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid amet aspernatur, autem deserunt distinctio
                            dolores eius, exercitationem facilis inventore.
                            <FontAwesomeIcon icon="fas fa-quote-right" />
                          </blockquote>
                          <div className="author mt-4">
                            <p className="small">
                              <span className="bold text-contrast">
                                Daniel Hamilton,
                              </span>
                              Web Developer
                            </p>
                            <img
                              src={Test14}
                              className="img-responsive signature mx-auto"
                              alt="..."
                            />
                          </div>
                          <div className="shape-wrapper">
                            <svg
                              className="svg-review-bottom"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#4f2ca9"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#8053ff"
                              ></path>
                            </svg>
                            <svg
                              className="svg-review-bottom back left"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
                                fill="#3f179a"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="reviews-navigation">
              <div
                className="reviews-nav reviews-nav-prev btn btn-gray-light btn-rounded shadow-hover"
                ref={prevRef}
              >
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-left" />
              </div>
              <div
                className="reviews-nav reviews-nav-next btn btn-gray-light btn-rounded shadow-hover"
                ref={nextRef}
              >
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extend;
