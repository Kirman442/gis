import React from "react";
import { Link } from "react-router-dom";
import Head from '../../components/Head';

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
                description="React + parquet WASM + apache-arrow + Web workers + Deck.gl"
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
                                <p className="text-medium-gray w-90 w-100 margin-35px-bottom text-medium line-height-28">This project demonstrates a high-performance approach to visualizing large-scale data</p>
                                <span className="text-light-gray opacity6 alt-font mb-0 text-uppercase text-small">27
                                    April 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programming,
                                    data processing, creating web app</span>
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
                            <h4 className="alt-font text-green">Overview</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                This project demonstrates a high-performance approach to visualizing large-scale internet speed data (download speeds in kbps) across Europe directly in a web browser. By leveraging modern web technologies like <b>Parquet</b>, <b>Apache Arrow</b> <b>Web Workers</b> <b>TypedArrays</b> and <b>Deck.gl</b>, we overcome the common performance bottlenecks associated with handling and rendering large geospatial datasets using traditional methods like <b>GeoJSON</b>
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Dataset contains performance metrics for global mobile broadband networks in the form of Mercator tiles at scale level 16 (approximately 610.8 meters by 610.8 meters at the equator). Upload and download speeds as well as latency times are recorded with the Speedtest by Ookla apps for Android and iOS and averaged for each tile. The measurements are filtered to obtain results with GPS-quality location accuracy.
                            </p>

                            <h6 className="alt-font text-green">The Challenge with Large Datasets in the Browser</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Visualizing millions of data points in a web browser often hits performance limits:</p>

                            <ul class="p-0 list-style-5">
                                <li><b>Slow Parsing:</b> Text-based formats like JSON (used in GeoJSON) require significant CPU time to parse and deserialize into JavaScript objects.</li>
                                <li><b>High Memory Usage</b>: JSON creates many small, scattered objects, leading to memory bloat and increased garbage collection overhead.</li>
                                <li><b>Inefficient GPU Uploads</b>: Data from JavaScript objects needs to be converted into a binary format suitable for the GPU, which is a slow process.</li>
                                <li><b>UI Freezing</b>: CPU-intensive data loading and processing block the main browser thread, making the user interface unresponsive.</li>
                            </ul>

                            <h6 className="alt-font text-green">High-Performance Approach</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                To tackle these challenges, we implement a processing pipeline designed for speed and efficiency:
                            </p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>Starting with Efficiency:</b> <span className="text-decoration-underline">The Parquet Format.</span> Recognizing that bandwidth is often the browser's limiting factor, we start with a format designed for large-scale efficiency: Apache Parquet. Parquet is a columnar binary format that inherently supports key techniques for handling big data on the web:</p>


                            <ul class="p-0 list-style-5">
                                <li><b>Better Compression:</b> It leverages advanced compression schemes (like run-length encoding) beyond simple text compression.</li>
                                <li><b>Requiring Less Data:</b> Its columnar structure allows for efficient partitioning and filtering, meaning a reader can intelligently download and process only the relevant parts or columns of a dataset.</li>
                                <li><b>Streaming Downloads:</b> Parquet readers can process data in chunks, allowing visualization to begin before the entire file is downloaded. The GeoParquet specification further enhances this by defining how to store vector geometries efficiently within this powerful format.</li>
                            </ul>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>In-Memory Speed: </b> <span className="text-decoration-underline">Apache Arrow.</span> Once the Parquet binary data is fetched, it's converted into the Apache Arrow in-memory format. Arrow provides a standardized, language-agnostic columnar memory layout that is crucial for high-performance data processing.</p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>Unlock Native Performance:</b> <span className="text-decoration-underline">Zero-Copy Access with TypedArrays.</span> A core benefit of the Arrow format is its compatibility with Zero-Copy data access. The underlying binary buffers from Arrow can be directly accessed using JavaScript TypedArrays (Float32Array, Uint16Array, etc.). This is a game-changer: the CPU can work directly with the binary data in memory without needing to deserialize or copy it into standard, overhead-heavy JavaScript objects (unlike parsing JSON). Accessing a value becomes a simple, fast memory offset (data[index * 6 + 3]) instead of an expensive property lookup . This maximizes CPU cache utilization (cache locality) and dramatically reduces memory footprint compared to text-based formats.</p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>Keeping the UI Responsive:</b> <span className="text-decoration-underline">Parallel Processing with Web Workers.</span> Even with efficient data formats, parsing and transforming large binary files are computationally intensive tasks. To prevent the main browser thread from freezing and ensure a smooth user interface, these heavy operations – fetching, decompressing Parquet, parsing into Arrow, and preparing the final Float32Array for the GPU – are offloaded to Web Workers. Utilizing a Worker Pool allows these tasks to run in parallel across multiple CPU cores, significantly accelerating the overall data loading and processing time while isolating potential errors.</p>


                            <h6 className="alt-font text-green">The Result - Smooth, Interactive, High-Performance Maps.</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                By orchestrating Parquet's binary efficiency, Arrow's in-memory format, the native speed of TypedArrays and Zero-Copy access, the parallel power of Web Workers, and Deck.gl's optimized WebGL rendering, this project delivers a high-performance web application capable of smoothly visualizing and exploring hundreds of thousands of internet speed data points. It demonstrates a practical and effective strategy for overcoming the traditional bottlenecks of large geospatial data visualization on the web, providing a responsive and interactive user experience.</p>



                            <h6 className="alt-font text-green">Web-App</h6>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Open web app in a <a href="https://kirman442.github.io/mobile-network-map/" target="_blank"><strong
                                    className="text-decoration-underline">new window.</strong></a>
                            </p>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-850px" src="https://kirman442.github.io/mobile-network-map/" title="Web-App"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center margin-50px-top">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <p className="text-extra-large font-weight-300 margin-15px-bottom">Data sources and applications:</p>
                                </div>

                                <div className="col-lg-8 col-md-10">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-30 d-inline-block">parquet-wasm</label><a className="text-decoration-underline w-70"
                                            href="https://kylebarron.dev/parquet-wasm/" target="_blank">WebAssembly bindings to read and write the Apache Parquet format</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-30 d-inline-block">apache-arrow</label><a className="text-decoration-underline"
                                            href="https://arrow.apache.org/docs/js/" target="_blank">The universal columnar format for fast data interchange</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-30 d-inline-block">deck.gl</label><a
                                                className="text-decoration-underline" href="https://deck.gl/"
                                                target="_blank">Framework for data analysis of large datasets</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-30 d-inline-block">React.js</label><a
                                                className="text-decoration-underline" href="https://react.dev/"
                                                target="_blank">React library for web interfaces
                                            </a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-30 d-inline-block">Ookla dataset</label><a className="text-decoration-underline"
                                            href="https://github.com/teamookla/ookla-open-data" target="_blank">Global mobile network performance metrics</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

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