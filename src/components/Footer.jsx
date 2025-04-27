import React from "react";
import { Link, useLocation } from "react-router-dom";

// const getMenuItemsFooter = (pathname) => {
//     if (pathname === "/") {
//         return (
//             <>
//                 <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
//                     Über mich
//                 </div>
//                 <div className="text-small line-height-24 text-medium-gray">
//                     <Link to="/about" className="text-medium-gray text-small">
//                         Mehr sehen
//                     </Link>
//                 </div>
//             </>
//         );
//     }

//     if (pathname === "/about") {
//         return null
//     }

//     if (pathname.startsWith("/portfolio")) {
//         return (
//             <>
//                 <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
//                     Über mich
//                 </div>
//                 <div className="text-small line-height-24 text-medium-gray">
//                     <Link to="/about" className="text-medium-gray text-small">
//                         Mehr sehen
//                     </Link>
//                 </div>
//             </>
//         );
//     }

//     return null;
// };

const getMenuItemsFooter = (pathname) => {
    const widgetTitle = (
        <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
            Über mich
        </div>
    );

    const seeMoreLink = (
        <div className="text-small line-height-24 text-medium-gray">
            <Link to="/about" className="text-medium-gray text-small">
                Mehr sehen
            </Link>
        </div>
    );

    return (
        <>
            {pathname !== "/about" && (
                <>
                    {widgetTitle}
                    {seeMoreLink}
                </>
            )}
        </>
    );
};

const Footer = () => {
    const locationFooter = useLocation();
    return (
        <footer className="footer-clean-dark bg-extra-dark-gray padding-two-tb sm-padding-30px-tb">
            <div className="footer-widget-area padding-30px-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
                                Kontaktinformationen
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                e-mail:{" "}
                                <a
                                    href="mailto:k.lisochenko@web.de"
                                    className="text-medium-gray"
                                >
                                    k.lisochenko@web.de
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            <div className="widget-title alt-font text-extra-small text-white-2 text-uppercase margin-15px-bottom font-weight-600">
                                Quick Links
                            </div>
                            <ul className="list-unstyled">
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Accidents" className="text-medium-gray text-small">
                                        Mobile Network
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Accidents" className="text-medium-gray text-small">
                                        Unfallkarte
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Bayern" className="text-medium-gray text-small">
                                        Bayern
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Kunstkarten" className="text-medium-gray text-small">
                                        Kunstkarten
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Flusssystem" className="text-medium-gray text-small">
                                        Flusssystem
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Ubahn" className="text-medium-gray text-small">
                                        Berliner U-Bahn
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Bergbau" className="text-medium-gray text-small">
                                        Risikomanagement
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Clustering" className="text-medium-gray text-small">
                                        Clustering
                                    </Link>
                                </li>
                                <li className="w-50 float-start">
                                    <Link to="/portfolio/Dresden" className="text-medium-gray text-small">
                                        Dresden
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            {getMenuItemsFooter(locationFooter.pathname)}
                            {/* <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
                                About me
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                <Link to="/about" className="text-medium-gray text-small">
                                    Mehr sehen
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="border-color-medium-dark-gray border-top padding-30px-top">
                    <div className="row">
                        <div className="col-12 text-small text-center text-medium-gray">
                            © 2025 Alle Rechte vorbehalten<br />
                            Kirill Lisochenko
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
