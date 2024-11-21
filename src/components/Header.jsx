import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const getMenuItems = (pathname) => {
    if (pathname === "/") {
        return (
            <li>
                <Link className="custom-link" to="/about">About</Link>
            </li>
        );
    }

    if (pathname === "/about") {
        return (
            <li>
                <Link className="custom-link" to="/">Home</Link>
            </li>
        );
    }

    if (pathname.startsWith("/portfolio")) {
        return (
            <>
                <li>
                    <Link className="custom-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="custom-link" to="/about">About</Link>
                </li>
            </>
        );
    }

    return null;
};

const Header = () => {
    const location = useLocation();

    return (
        <header>
            {/* --start navigation -- */}
            <nav className="navbar navbar-default bootsnav navbar-top header-light background-transparent nav-box-width navbar-expand-lg">
                <div className="container-fluid nav-header-container">
                    {/* Mobile menu button */}
                    <div className="col accordion-menu pe-0 pe-md-3">
                        <button
                            type="button"
                            className="navbar-toggler collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-collapse-toggle-1"
                        >
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        {/* Navi menu */}
                        <div className="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
                            <ul id="accordion" className="nav navbar-nav no-margin alt-font text-normal">
                                {getMenuItems(location.pathname)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
