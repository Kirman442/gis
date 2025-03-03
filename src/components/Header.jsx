import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

const menuItemsData = [
    {
        path: "/",
        label: "Home",
        type: "link",
        condition: (pathname) => pathname !== "/"
    },
    {
        label: "Portfolio", // Заголовок dropdown пункта
        type: "hover-dropdown", // Новый тип "hover-dropdown" для Portfolio
        condition: (pathname) => true,
        children: [
            {
                path: "/portfolio/Bayern",
                label: "Bayern",
                type: "link"
            },
            {
                path: "/portfolio/Kunstkarten",
                label: "Kunstkarten",
                type: "link"
            },
            {
                path: "/portfolio/Flusssystem",
                label: "Flusssystem",
                type: "link"
            },
            {
                path: "/portfolio/Ubahn",
                label: "Berliner U-Bahn",
                type: "link"
            },
            {
                path: "/portfolio/Bergbau",
                label: "Risikomanagement",
                type: "link"
            },
            {
                path: "/portfolio/Clustering",
                label: "Clustering",
                type: "link"
            },
            {
                path: "/portfolio/Dresden",
                label: "Dresden",
                type: "link"
            }
        ]
    },
    {
        path: "/about",
        label: "About",
        type: "link",
        condition: (pathname) => pathname !== "/about"
    }
];


const getMenuItems = (pathname, closeMenu) => {
    return (
        <>
            {menuItemsData.map((item, index) => {
                if (item.condition(pathname)) {
                    if (item.type === "link") { // Рендерим обычную ссылку
                        return (
                            <li key={index}>
                                <Link
                                    className="custom-link"
                                    to={item.path}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    } else if (item.type === "hover-dropdown") { // Рендерим hover-dropdown для Portfolio
                        return (
                            <HoverDropdownMenuItem
                                className="custom-link"
                                key={index}
                                menuItemData={item}
                                closeMenu={closeMenu}
                            />
                        );
                    }
                }
                return null;
            })}
        </>
    );
};

const HoverDropdownMenuItem = ({ menuItemData, closeMenu }) => {
    const ref = useRef(null);
    // const [isOpen, setOpen] = useState(false);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

    return (
        <li key={menuItemData.label} className="dropdown simple-dropdown">
            <div ref={ref} {...anchorProps} className="simple-dropdown-div">
                <a href="#" className="custom-link my-dropdown-link-style">{menuItemData.label}</a>
            </div>

            <ControlledMenu
                {...hoverProps}
                {...menuState}
                // state={isOpen ? 'open' : 'closed'}
                anchorRef={ref}
                onClose={() => toggle(false)}
                positioning='bottom-start'
            >
                {menuItemData.children.map((childItem, childIndex) => (
                    <MenuItem key={childIndex}> {/* MenuItem от @szhsin/react-menu */}
                        <Link
                            className="dropmenu" // Стилизация ссылки внутри MenuItem
                            to={childItem.path}
                        >
                            {childItem.label}
                        </Link>
                    </MenuItem>
                ))}
            </ControlledMenu>
        </li>
    );
};

const Header = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close menu
    };


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
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                        </button>

                        {/* Navi menu */}
                        {/* <div className="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1"> */}
                        <div className={`navbar-collapse collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbar-collapse-toggle-1">
                            <ul id="accordion" className="nav navbar-nav no-margin alt-font text-normal">
                                {getMenuItems(location.pathname, closeMenu)}
                            </ul>
                        </div>
                        {/* <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
