import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { PortfolioSliderFotos } from "./SliderAndFotosMaps"

const PortfolioSlider = () => {
    useEffect(() => {
        const swiper = document.querySelector(".swiper");
        if (swiper) swiper.swiper.update();
    });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 hover-option4 margin-5px-bottom">
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={15}
                        centeredSlides={true}
                        // autoplay={false}
                        breakpoints={{
                            1200: { slidesPerView: 4 },
                            992: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        navigation={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {PortfolioSliderFotos.map((portfotos) => (
                            <SwiperSlide
                                key={portfotos.id}>
                                <div className="swiper-slide grid-item">
                                    <Link to={portfotos.link} >
                                        <figure>
                                            <div className="portfolio-img bg-extra-dark-gray">
                                                <img
                                                    src={portfotos.image}
                                                    alt={portfotos.header}
                                                    className="grayscale-filter"
                                                />
                                            </div>
                                            <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                                <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                    <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                        {portfotos.header}
                                                    </span>
                                                    <p className="text-medium-gray text-uppercase text-extra-small">
                                                        {portfotos.text}
                                                    </p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>

                    {/* Pagination */}
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSlider;
