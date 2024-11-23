import React, { useEffect, useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Логика скроллинга
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // console.log(`Current Scroll: ${currentScrollY}, Last Scroll: ${lastScrollY}`);

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // console.log("Scrolling down: hiding header");
            setIsVisible(false);
        } else {
            // console.log("Scrolling up: showing header");
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // console.log("Scrolling...", window.scrollY);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease",
            }}
        >
            {/* --start navigation -- */}
            <nav className="navbar navbar-default bootsnav header-light background-transparent nav-box-width navbar-expand-lg"> {/* navbar-top */}
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
