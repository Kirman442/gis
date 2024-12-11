import React from "react";
import { Link } from "react-router-dom";
import PortfolioSlider from "../components/PortfolioSlider";
import Head from '../components/Head';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const PortfolioFoto = `${import.meta.env.BASE_URL}images/about/aboutFotoMain.${webpSupported ? 'webp' : 'jpg'}`
const PortfolioFoto2 = `${import.meta.env.BASE_URL}images/about/aboutFoto1.${webpSupported ? 'webp' : 'jpg'}`

import { AboutSkills as Skills } from "../components/SliderAndFotosMaps"
import { AboutWeiterbildung as Wtb } from '../components/SliderAndFotosMaps'

const About = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | About"
                description="Über mich und meine GIS-Dienstleistungen"
                keywords="gis services, qgis expertise, kartographie, geoinformation, programmierung, visualisierung"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 p-0 cover-background md-h-500px sm-h-300px grayscale-filter"
                            style={{ background: `url(${PortfolioFoto})` }}></div>
                        <div className="col-xl-6 col-lg-5 p-0  bg-medium-light-gray">
                            <div className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <i className="fa-solid fa-quote-left text-green icon-extra-large margin-5px-bottom"></i>
                                <h5 className="text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font">Hallo, ich
                                    bin ein
                                    GIS- und Geodatenspezialist &amp; Softwareentwickler aus Holzheim, Bayern.</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end about product section --> */}
            <section style={{ visibility: "visible" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 sm-margin-40px-bottom">
                            {/* <!-- start blockquote --> */}
                            <blockquote className="border-color-green">
                                <p>Wer aufhört zu lernen, ist alt, sei es mit zwanzig oder achtzig. Wer weiter lernt, bleibt
                                    jung.</p>
                                <footer className="text-extra-medium-gray">Henry Ford</footer>
                            </blockquote>
                            {/* <!-- end blockquote --> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- start information section --> */}
            <section className="p-0 bg-light-gray">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-12 col-lg-4 cover-background md-h-450px "
                            style={{
                                background: `url(${PortfolioFoto2})`
                            }}>
                        </div>
                        <div
                            className="col-12 col-lg-8 padding-five-top padding-five-lr md-padding-nine-half-tb xs-padding-15px-lr xs-padding-50px-tb">
                            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-sm-2">
                                {/* <!-- start feature box item --> */}
                                {Wtb.map((wtb) => (
                                    <div key={wtb.id}
                                        className="col margin-six-bottom text-center last-paragraph-no-margin">
                                        <div className="row">
                                            <div className="col-lg-3 text-center">
                                                <h3 className="text-light-gray font-weight-300 mb-0 letter-spacing-minus-2">
                                                    {wtb.id}
                                                </h3>
                                            </div>
                                            <div className="col-lg-9 margin-5px-top text-center text-lg-start">
                                                <span className="alt-font text-extra-dark-gray font-weight-600 margin-one-bottom d-block">
                                                    {wtb.header}
                                                </span>
                                                <span className="alt-font text-extra-small text-uppercase margin-10px-bottom d-block">{wtb.desc}</span>
                                                <p className="d-inline-block w-90 xl-w-95">{wtb.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <!-- end feature box item --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end information section --> */}

            {/* <!-- start portfolio slider section --> */}
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 margin-60px-bottom sm-margin-40px-bottom">
                            {/* <!-- start blockquote --> */}
                            <blockquote className="border-color-green">
                                <p>Die Wahrnehmung hängt nicht nur davon ab, was uns im Moment widerfährt, sondern auch davon,
                                    wie unsere Augen und unser
                                    Gehirn Informationen verarbeiten. Was Sie sehen und was Sie erleben, während Sie ein Objekt
                                    betrachten, sind völlig
                                    unterschiedliche Dinge.</p>
                                <footer className="text-extra-medium-gray">Jason Maria</footer>
                            </blockquote>
                            {/* <!-- end blockquote --> */}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                        <div className="position-relative overflow-hidden w-100">
                            <span
                                className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Projekte</span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 hover-option4 margin-5px-bottom">
                            <PortfolioSlider />

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end portfolio slider section --> */}
            {/* <!-- start quotation skills section --> */}
            <section style={{ visibility: "visible" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 sm-margin-40px-bottom">
                            {/* <!-- start blockquote --> */}
                            <blockquote className="border-color-green">
                                <p>Mit jeder neuen Herausforderung wachse ich, indem ich meine Fähigkeiten weiterentwickle und
                                    dabei den Blick für
                                    zukünftige Chancen offen halte.</p>
                            </blockquote>
                            {/* <!-- end blockquote --> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center margin-40px-bottom sm-margin-40px-bottom">
                        <div className="position-relative overflow-hidden w-100">
                            <span
                                className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Skills</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end quotation skills section --> */}
            {/* <!-- start skills section --> */}
            <section id="expertise" className="wow animate__fadeIn parallax" data-parallax-background-ratio="0.4"
                style={{ background: `url(${import.meta.env.BASE_URL}images/about/aboutSkills.${webpSupported ? 'webp' : 'jpg'})` }}>
                <div className="opacity-full bg-black"></div>
                <div className="container position-relative">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center">
                        {Skills.map((skill) => (
                            <div key={skill.id}
                                className="col text-center md-margin-30px-bottom wow ">
                                <div className="chart-percent">
                                    <div style={{ width: '130px', height: '150px' }}>
                                        <CircularProgressbar
                                            value={skill.value}
                                            text={`${Math.round(skill.value)}%`}
                                            styles={{
                                                path: {
                                                    stroke: '#089995',
                                                },
                                                text: {
                                                    fill: '#ffffff',
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="chart-text">
                                    <span
                                        className="alt-font text-white-2 font-weight-600 margin-5px-bottom margin-20px-top d-block">{skill.header}</span>
                                    <p className="mx-auto w-90 text-medium-gray">{skill.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- end skills section --> */}
            {/* <!-- start Beruflicher Werdegang section --> */}
            <section className="wow animate__fadeIn" style={{ visibility: "visible", animation: "fadeIn" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                            <div className="position-relative overflow-hidden w-100">
                                <span
                                    className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Beruflicher
                                    Werdegang</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center btn-dual justify-content-center">
                            {/* <!-- start buttons --> */}
                            <Link to="/pdf/Lisochenko_Kirill_Lebenslauf.pdf" target="_blank"
                                className="btn btn-link btn-medium text-extra-dark-gray text-green-hover margin-5px-all lg-margin-15px-bottom d-table d-lg-inline-block md-margin-lr-auto">Lebenslauf</Link>
                            <Link to="/pdf/Lisochenko_Kirill_Projektliste.pdf" target="_blank"
                                className="btn btn-link btn-medium text-extra-dark-gray text-green-hover margin-5px-all lg-margin-15px-bottom d-table d-lg-inline-block md-margin-lr-auto">Projektliste</Link>
                            <Link to="/pdf/Lisochenko_Kirill_Zertifikate_2022-2024.pdf" target="_blank"
                                className="btn btn-link btn-medium text-extra-dark-gray text-green-hover margin-5px-all lg-margin-15px-bottom d-table d-lg-inline-block md-margin-lr-auto">Zertifikate</Link>
                            {/* <!-- end buttons --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Beruflicher Werdegang section --> */}
            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animation: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <Link className="blog-nav-home" to="/" aria-label="Home page link">
                                    <span className="text-dark-gray blog-nav-home text-extra-small text-uppercase d-none d-md-block">Home</span>
                                    <i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default About;