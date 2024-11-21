import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            {/* <!-- start page not found section --> */}
            <section id="home" className="parallax p-0 mobile-height" style={{ background: "url('/images/home/gis-projekte-logo-1920.jpg')" }}>
                <div className="opacity-full bg-extra-dark-gray"></div>
                <div className="container position-relative full-screen">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <div className="bg-black-opacity-light w-60 mx-auto md-w-80 xs-w-95">
                                <div className="padding-fifteen-tb sm-padding-twelve-all xs-padding-25px-all">
                                    <h6 className="text-uppercase text-deep-green  font-weight-600 alt-font d-block margin-5px-bottom">Seite nicht gefunden</h6>
                                    <span className="text-medium-gray w-60 d-block mx-auto text-large md-w-100">Die von Ihnen gesuchte Seite konnte nicht gefunden werden.</span>
                                    {/* <form action="search-result.html" method="post" className="position-relative">
                                        <div className="input-group-404 input-group margin-50px-tb sm-margin-20px-tb">
                                            <input name="text" id="text" data-email="required" type="text" placeholder="Enter your keywords..." className="extra-big-input border-none form-control" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-large bg-white text-medium-gray search-button"><i className="ti-search icon-small m-0 position-raltive top-2"></i></button>
                                            </div>
                                        </div>
                                    </form> */}
                                    <Link className="btn btn-transparent-white btn-medium text-extra-small border-radius-4 margin-25px-top" to="/" ><i className="ti-arrow-left margin-5px-right ms-0" aria-hidden="true"></i> Home <i className="ti-arrow-right margin-5px-right ms-0" aria-hidden="true"></i></Link>
                                    {/* <a href="index.html" className="btn btn-transparent-white btn-medium text-extra-small border-radius-4 margin-25px-top"><i className="ti-arrow-left margin-5px-right ms-0" aria-hidden="true"></i> Back To Homepage</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page not found section --> */}


        </div>
    );
};

export default NotFound;