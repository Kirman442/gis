import React, { useEffect, useState } from "react";
import Head from '../components/Head';
import HomeGallery from "../components/HomeGallery";

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const Home = () => {
    const webpSupported = isWebpSupported();
    const gislogo = `${import.meta.env.BASE_URL}images/home/gis-projekte-logo-1920.${webpSupported ? 'webp' : 'jpg'}`

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = gislogo;
        link.setAttribute('fetchpriority', 'high'); // Устанавливаем высокий приоритет
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link); // Удаляем, если компонент размонтируется
        };
    }, [gislogo]);

    return (
        <div>
            <Head
                title="GIS-Projekte | Home"
                description="Willkommen bei GIS-Projekte - Ein Rückblick auf kleine Projekte, die durch interessante Geschichten inspiriert wurden."
            />
            <LazyLoadComponent>
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
            </LazyLoadComponent>
            <LazyLoadComponent>
                <HomeGallery />
            </LazyLoadComponent>
        </div >
    );
};

export default Home;
