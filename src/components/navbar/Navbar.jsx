
  
import "./navbar.css";
import logo from "./logo.png";
import { useState, useEffect, useCallback } from "react";


const Navbar = (props) => {
  const { background } = props;
  const navStyle = {
    backgroundColor: background || "",
  };
  //Hook for menu arrow:
  const [isServicesArrowChanged, setIsServicesArrowChanged] = useState("⋁");
  const servicesArrowDocumentClick = () => {
    setIsServicesArrowChanged("⋁");
  };
  const [isResourcesArrowChanged, setIsResourcesArrowChanged] = useState("⋁");
  const resourcesArrowDocumentClick = () => {
    setIsResourcesArrowChanged("⋁");
  };
  const [isAboutUsArrowChanged, setIsAboutUsArrowChanged] = useState("⋁");
  const aboutusArrowDocumentClick = () => {
    setIsAboutUsArrowChanged("⋁");
  };
  //Hook for Services:
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const toggleServicesMenu = () => {
    if (isServicesVisible) {
      setIsServicesVisible(false);
      setIsServicesArrowChanged("⋁");
    } else {
      setIsServicesVisible(true);
      setIsResourcesVisible(false);
      setIsAboutUsVisible(false);
      setIsServicesArrowChanged("⋀");
      setIsResourcesArrowChanged("⋁");
      setIsAboutUsArrowChanged("⋁");
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
      setIsResourcesArrowChanged("⋁");
    } else {
      setIsResourcesVisible(true);
      setIsServicesVisible(false);
      setIsAboutUsVisible(false);
      setIsResourcesArrowChanged("⋀");
      setIsServicesArrowChanged("⋁");
      setIsAboutUsArrowChanged("⋁");
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
      setIsAboutUsArrowChanged("⋁");
    } else {
      setIsAboutUsVisible(true);
      setIsServicesVisible(false);
      setIsResourcesVisible(false);
      setIsAboutUsArrowChanged("⋀");
      setIsServicesArrowChanged("⋁");
      setIsResourcesArrowChanged("⋁");
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
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleHamburgerClick}>
          &#9776;
        </div>

        <ul
          className={`nav-list ${isNavListVisible ? "show" : ""} `}
          onClick={(e) => e.stopPropagation()}
        >
          <li className="close-button" onClick={closeMenu}> X
          </li>
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <div className="nav-link" onClick={toggleServicesMenu}>
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
            <div className="nav-link" onClick={toggleResourcesMenu}>
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
            <div className="nav-link" onClick={toggleAboutUsMenu}>
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
            <a className="nav-link" href="/careers">
              Careers
            </a>
          </li>
          <li>
            <a className="nav-link" href="/faqs">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;