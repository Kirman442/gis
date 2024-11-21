import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeGallery = () => {
    return (
        <section className="bg-extra-dark-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className=" grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-1col xs-grid-1col blog-post-style4 gutter-large">
                            <li className="grid-sizer"></li>
                            {/* -- Kunstkarten -- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className=" bg-extra-dark-gray">
                                            <Link to="/portfolio/Kunstkarten" className="text-medium-gray text-small">
                                                <img src="/images/home/Pekin_1_1_1_0_5_1.jpg" alt="Kunstkarten" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">18
                                                        April 2024</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0"><Link to="/portfolio/Kunstkarten" className="text-white-2 text-green-hover">Kunstkarten
                                                        mit Python
                                                        erstellen</Link></h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">Sehen
                                                        wir uns an, wie wir mit
                                                        Python und
                                                        OpenStreetMap-Daten schöne
                                                        Karten erstellen können.</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                            {/* -- Flusssystem-- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className="blog-img bg-extra-dark-gray">
                                            <Link to="/portfolio/Flusssystem" className="text-medium-gray text-small">
                                                <img src="/images/home/Fluss_Germany.jpg" alt="Flusssystemstkarten" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">25
                                                        Mai 2024</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0">
                                                        <Link to="/portfolio/Flusssystem" className="text-white-2 text-green-hover">
                                                            Die Visualisierung des
                                                            Flusssystems
                                                        </Link>
                                                    </h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">Filtern und
                                                        stilisieren das globale Flusssystem eines ganzen Kontinents oder eines
                                                        bestimmten Landes.</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                            {/* -- Berliner U-bahn-- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className="blog-img bg-extra-dark-gray">
                                            <Link to="/portfolio/Ubahn" className="text-medium-gray text-small">
                                                <img src="/images/home/brabutor.jpg" alt="Berliner U-Bahn
                                                    Geschichte" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">19
                                                        Dezember 2023</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0">
                                                        <Link className="text-white-2 text-green-hover" to="/portfolio/Ubahn" >Berliner U-Bahn Geschichte</Link>

                                                    </h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">Interaktive
                                                        Karte über die Entwicklung und den Bau der Berliner U-Bahn.</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-12 ">
                        <ul className=" grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-1col xs-grid-1col blog-post-style4 gutter-large">
                            <li className="grid-sizer"></li>
                            {/* -- Risikomanagement -- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className="blog-img bg-extra-dark-gray">
                                            <Link to="/portfolio/Bergbau" className="text-medium-gray text-small">
                                                <img src="/images/home/risikomanagement.jpg" alt="Risikomanagement" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">25
                                                        August 2022 | Kirill
                                                        Lisochenko & Martin Burzynski</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0">
                                                        <Link className="text-white-2 text-green-hover" to="/portfolio/Bergbau" >
                                                            Risikomanagement
                                                            oberflächennaher Strukturen
                                                        </Link>
                                                    </h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">GIS-technische
                                                        Umsetzung eines vorgegebenen Workflows zur Erstellung von
                                                        3D-Bergbaustrukturen.</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                            {/* -- Dresden  -- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className="blog-img bg-extra-dark-gray">
                                            <Link to="/portfolio/Dresden" className="text-medium-gray text-small">
                                                <img src="/images/home/Dresden-hc.jpg" alt="Infrastruktur um
                                                    Dresden" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">25
                                                        September 2023</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0">
                                                        <Link className="text-white-2 text-green-hover" to="/portfolio/Dresden" >
                                                            Infrastruktur um
                                                            Dresden
                                                        </Link></h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">Projekt zur
                                                        Digitalisierung der Verkehrs-, Elektro-, Kataster- und
                                                        Landschaftsinfrastruktur rund um Dresden.</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                            {/* -- Clustering  -- */}
                            <div className="fade-in">
                                <li className="grid-item">
                                    <figure>
                                        <div className="blog-img bg-extra-dark-gray">
                                            <Link to="/portfolio/Clustering" className="text-medium-gray text-small">
                                                <img src="/images/home/clustering2.jpg" alt="Clustering" />
                                            </Link>
                                        </div>
                                        <figcaption>
                                            <div className="portfolio-hover-main text-start">
                                                <div className="blog-hover-box align-bottom">
                                                    <span
                                                        className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-5px-bottom sm-margin-5px-bottom">25
                                                        März 2024</span>
                                                    <h6 className="alt-font d-block text-white-2 font-weight-400 mb-0">
                                                        <Link className="text-white-2 text-green-hover" to="/portfolio/Clustering" >
                                                            Clustering
                                                        </Link>
                                                    </h6>
                                                    <p className="text-medium-gray margin-10px-top blog-hover-text">Manchmal müssen
                                                        wir eine große Menge an Daten auf der Karte anzeigen. Und in diesem Fall
                                                        ist es besser, Clustering zu verwenden</p>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default HomeGallery;