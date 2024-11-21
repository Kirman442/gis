import React from "react";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
    return (
        <div>
            <section

                style={{ backgroundImage: "url('/images/home/gis-projekte-logo-1920.jpg')" }}
            >
                <div className="opacity-medium bg-extra-dark-gray"></div>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-12 d-flex flex-column justify-content-center text-center extra-small-screen page-title-large">
                            <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">
                                GIS-Projekte
                            </h1>
                            <span className="text-white-2 opacity6 alt-font">
                                Ein Rückblick auf kleine Projekte, die durch interessante
                                Geschichten inspiriert wurden.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <HomeGallery />
        </div >
    );
};

export default Home;
