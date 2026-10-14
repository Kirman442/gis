import { Link } from "react-router-dom";
import Head from '../../components/Head';
import MobileNetworkArticle from "./MobileNetworkArticle";

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const MobileNetworkFoto = `${import.meta.env.BASE_URL}images/mobile-network/mobile-network-header.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioMobileNetwork = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Web visualization of internet speed metrics"
                description="Mobile internet performance across 42 countries with Arrow IPC, Brotli, Web Workers and binary deck.gl layers. Includes the original Parquet architecture."
                keywords="gis, Deck.gl, programming, visualization"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 cover-background p-0 md-h-500px sm-h-300px"
                            style={{ background: `url(${MobileNetworkFoto})` }}></div>
                        {/* <img
                                src={ClusteringFoto}
                                alt="Clustering"
                                className="cover-background"
                                style={{
                                    objectFit: "cover",
                                    width: "90%",
                                    height: "100%",
                                }}
                            />
                        </div> */}

                        {/* mobile network performance metrics */}
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Web visualization of mobile network performance metrics</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="text-medium-gray w-90 w-100 margin-35px-bottom text-medium line-height-28">1.24 million tile records, visualized with Arrow IPC, Brotli and binary deck.gl layers</p>
                                <span className="text-light-gray opacity6 alt-font mb-0 text-uppercase text-small">27
                                    April 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programming,
                                    data processing, creating web app</span>
                                <p className="text-medium-gray text-small margin-15px-top mb-0">Architecture updated: 8 October 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end about product section --> */}

            {/* <!-- start about product section --> */}
            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <MobileNetworkArticle />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- start blog navigation bar section --> */}
            < section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Dresden" ><i className="ti-arrow-left blog-nav-icon"></i>Infrastruktur um Dresden</Link>

                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" aria-label="Home page link" ><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Accidents" ><i className="ti-arrow-right blog-nav-icon"></i>Unfallkarte</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- end blog navigation bar section --> */}


        </div >
    );
};

export default PortfolioMobileNetwork;