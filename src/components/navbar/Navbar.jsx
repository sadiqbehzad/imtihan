import "./navbar.css";

import { useState, useEffect, useCallback } from "react";

const Navbar = (props) => {
  const { background, color } = props;
  const navStyle = {
    backgroundColor: background || "black",
    color: color || "white",
  };
  const navStyleMobile = {
    color: "white",
  };

  //Hook for menu arrow:
  const [isServicesArrowChanged, setIsServicesArrowChanged] = useState("▼");
  const servicesArrowDocumentClick = () => {
    setIsServicesArrowChanged("▼");
  };
  const [isResourcesArrowChanged, setIsResourcesArrowChanged] = useState("▼");
  const resourcesArrowDocumentClick = () => {
    setIsResourcesArrowChanged("▼");
  };
  const [isAboutUsArrowChanged, setIsAboutUsArrowChanged] = useState("▼");
  const aboutusArrowDocumentClick = () => {
    setIsAboutUsArrowChanged("▼");
  };
  //Hook for Services:
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const toggleServicesMenu = () => {
    if (isServicesVisible) {
      setIsServicesVisible(false);
      setIsServicesArrowChanged("▼");
    } else {
      setIsServicesVisible(true);
      setIsResourcesVisible(false);
      setIsAboutUsVisible(false);
      setIsServicesArrowChanged("▲");
      setIsResourcesArrowChanged("▼");
      setIsAboutUsArrowChanged("▼");
    }
  };
  const servicesDocumentClick = () => {
    setIsServicesVisible(false);
  };
  //Hook For Resources:
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const toggleResourcesMenu = () => {
    if (isResourcesVisible) {
      setIsResourcesVisible(false);
      setIsResourcesArrowChanged("▼");
    } else {
      setIsResourcesVisible(true);
      setIsServicesVisible(false);
      setIsAboutUsVisible(false);
      setIsResourcesArrowChanged("▲");
      setIsServicesArrowChanged("▼");
      setIsAboutUsArrowChanged("▼");
    }
  };
  const resourcesDocumentClick = () => {
    setIsResourcesVisible(false);
  };
  //Hook For About Us:
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const toggleAboutUsMenu = () => {
    if (isAboutUsVisible) {
      setIsAboutUsVisible(false);
      setIsAboutUsArrowChanged("▼");
    } else {
      setIsAboutUsVisible(true);
      setIsServicesVisible(false);
      setIsResourcesVisible(false);
      setIsAboutUsArrowChanged("▲");
      setIsServicesArrowChanged("▼");
      setIsResourcesArrowChanged("▼");
    }
  };
  const aboutUsDocumentClick = () => {
    setIsAboutUsVisible(false);
  };
  //Hook for Hamburger Icon:
  const [isNavListVisible, setisNavListVisible] = useState(false);
  const handleHamburgerClick = () => {
    if (isNavListVisible) {
      setisNavListVisible(false);
    } else {
      setisNavListVisible(true);
    }
  };
  //combined Document-handler functions:
  const handleDocumentClick = useCallback(() => {
    servicesDocumentClick();
    resourcesDocumentClick();
    aboutUsDocumentClick();
    servicesArrowDocumentClick();
    resourcesArrowDocumentClick();
    aboutusArrowDocumentClick();
  }, []);

  //hide the dropdowns once the screen is resized:
  const handleResize = () => {
    setisNavListVisible(false);
    setIsServicesVisible(false);
    setIsResourcesVisible(false);
    setIsAboutUsVisible(false);
  };

  useEffect(() => {
    // if (
    //   navStyle.backgroundColor === "transparent" ||
    //   navStyle.backgroundColor === "white"
    // ) {
    //   setIsLogoBlack(false);
    // } else {
    //   setIsLogoBlack(true);
    // }

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleDocumentClick]);
  //closing the menu on mobile screen:
  const closeMenu = () => {
    setisNavListVisible(false);
  };
  return (
    <nav class="navbar" style={navStyle}>
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <h3>collegium</h3>
          </a>
        </div>
        <div
          className="menu-icon"
          onClick={handleHamburgerClick}
          style={navStyle}
        >
          &#9776;
        </div>

        <ul
          className={`nav-list ${isNavListVisible ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
          style={navStyleMobile}
        >
          <li className="close-button" onClick={closeMenu}>
            &#10006;
          </li>
          <li>
            <a
              className="nav-link"
              href="/"
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              Home
            </a>
          </li>
          <li>
            <div
              className="nav-link"
              onClick={toggleServicesMenu}
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              Services&nbsp;&nbsp;&nbsp;
              <span className="arrow">{isServicesArrowChanged}</span>
            </div>
            {isServicesVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/owners">
                    Owners
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/developers">
                    Developers
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/projectteam">
                    Project Team
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="nav-link"
              onClick={toggleResourcesMenu}
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              Resources&nbsp;&nbsp;&nbsp;
              <span className="arrow">{isResourcesArrowChanged}</span>
            </div>
            {isResourcesVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/community">
                    Community
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/userstories">
                    User Stories
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="nav-link"
              onClick={toggleAboutUsMenu}
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              About Us&nbsp;&nbsp;&nbsp;
              <span className="arrow">{isAboutUsArrowChanged}</span>
            </div>
            {isAboutUsVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/who-we-are">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/partners">
                    Partners
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              className="nav-link"
              href="/careers"
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              Careers
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/faqs"
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
