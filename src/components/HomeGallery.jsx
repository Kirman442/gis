import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeProjectFotos } from "./SliderAndFotosMaps";

const HomeGallery = () => {
    return (
        <section className="bg-extra-dark-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className=" grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-1col xs-grid-1col blog-post-style4 gutter-large">
                            <li className="grid-sizer"></li>
                            {HomeProjectFotos.map((HProjectFotos) => (
                                <li key={HProjectFotos.id} className="grid-item">
                                    <div className="fade-in">

                                        <figure>
                                            <div className=" bg-extra-dark-gray">
                                                <Link to={HProjectFotos.link} className="text-medium-gray text-small">
                                                    <img src={HProjectFotos.image} alt={HProjectFotos.alt} />
                                                </Link>
                                            </div>
                                            <figcaption>
                                                <div className="portfolio-hover-main text-start">
                                                    <div className="blog-hover-box align-bottom">
                                                        <span
                                                            className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">{HProjectFotos.data}</span>
                                                        <span className="text-extra-large alt-font d-block text-white-2 font-weight-400 mb-0"><Link to={HProjectFotos.link} className="text-white-2 text-green-hover">{HProjectFotos.header}</Link></span>
                                                        <p className="text-medium-gray margin-10px-top blog-hover-text">{HProjectFotos.text}</p>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default HomeGallery;