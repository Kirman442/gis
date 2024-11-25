import React from "react";
import Head from '../components/Head';
import HomeGallery from "../components/HomeGallery";

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();
const gislogo = `${import.meta.env.BASE_URL}images/home/gis-projekte-logo-1920.${webpSupported ? 'webp' : 'jpg'}`

const Home = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Home"
                description="Willkommen bei GIS-Projekte - Ein Rückblick auf kleine Projekte, die durch interessante Geschichten inspiriert wurden."
            />
            <section
                style={{ backgroundImage: `url(${gislogo})` }}
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
