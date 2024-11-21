import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css"; // Основные стили
import "swiper/css/navigation"; // Стили для навигации
import "swiper/css/pagination"; // Стили для пагинации

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PortfolioSlider = () => {
    useEffect(() => {
        // Убедимся, что Swiper корректно инициализирует кнопки
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
                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Kunstkarten" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/about/aboutPekin1000.jpg`}
                                                alt=""
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Kunstkarten mit Python erstellen
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung, Visualisierung
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Flusssystem" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/about/aboutFluss1000.jpg`}
                                                alt="Example"
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Die Visualisierung des Flusssystems
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Ubahn" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/home/brabutor.jpg`}
                                                alt="Example"
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Berliner
                                                    U-Bahn
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Bergbau" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/home/risikomanagement.jpg`}
                                                alt="Example"
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Risikomanagement
                                                    oberflächennaher Strukturen
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung, 3D-Modellierung
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Clustering" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/home/clustering2.jpg`}
                                                alt="Example"
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Clustering
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung, Web-App
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide grid-item">
                                <Link to="/portfolio/Dresden" >
                                    <figure>
                                        <div className="portfolio-img bg-extra-dark-gray">
                                            <img
                                                src={`${import.meta.env.BASE_URL}images/home/Dresden-hc.jpg`}
                                                alt="Example"
                                                className="grayscale-filter"
                                            />
                                        </div>
                                        <figcaption className="d-flex justify-content-center align-items-center text-center grayscale-filter">
                                            <div className="portfolio-hover-content position-relative last-paragraph-no-margin">
                                                <span className="font-weight-600 line-height-normal alt-font text-white-2 text-uppercase margin-5px-bottom d-block">
                                                    Infrastruktur
                                                    um
                                                    Dresden
                                                </span>
                                                <p className="text-medium-gray text-uppercase text-extra-small">
                                                    Programmierung, Datenbearbeitung, Web-App
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
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
