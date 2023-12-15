import { useState } from "react";
import Header from "../Header/Header";
import "./navbar.css";
import { Link } from "react-router-dom";
import Register from "../../UseScripts/Register/Register";
import { useNavigate } from "react-router-dom";

// import initializeSearchBarBehavior from '../../UseScripts/SearchScript';
// import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  //     const searchIconRef = useRef(null);
  //   const searchInputRef = useRef(null);

  //   useEffect(() => {
  //     const searchIcon = searchIconRef.current;
  //     const searchInput = searchInputRef.current;

  //     searchIcon.addEventListener("click", () => {
  //       if (searchInput.style.width === "100%") {
  //         searchInput.style.width = "10%";
  //         searchInput.style.padding = "20px";
  //       } else {
  //         searchInput.style.width = "100%";
  //         searchInput.style.padding = "5px";
  //         searchInput.focus();
  //       }
  //     });
  //   }, []);

  // useEffect(() => {
  //     const searchIcon = document.getElementById("search-icon");
  //     const searchInput = document.getElementById("search-input");
  //     initializeSearchBarBehavior(searchIcon, searchInput);
  // }, []); // Empty dependency array to run it only once when the component mounts

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
  };

  const navigate = useNavigate();

  // Array of route paths where Navbar should not be rendered
  const excludedRoutes = ["/adminHome", "/allCustomers", "/allHotels"];

  // Check if the current route is in the excludedRoutes array
  const shouldRenderNavbar = !excludedRoutes.some((route) =>
    window.location.pathname.includes(route)
  );

  if (!shouldRenderNavbar) {
    return null; // Don't render Navbar for specified routes
  }

  return (
    <div>
      <Header />

      <nav class="navbar navbar-expand-lg navbar-light bg-light my-nav">
        <a class="navbar-brand" href="#">
          <img src="images/odyssey copy.jpeg" alt="" className="nav-img" />
          BOOKINGS
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <Link to="/">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME <span class="sr-only">(current)</span>
                </a>
              </li>
            </Link>

            <Link to="/about">
              <li class="nav-item">
                <a class="nav-link">ABOUT</a>
              </li>
            </Link>

            <Link to="/phase1">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  HOTELS
                </a>
              </li>
            </Link>
            <li class="nav-item">
              <a class="nav-link" href="#">
                BLOG
              </a>
            </li>

            <Link to="/contact">
              <li class="nav-item">
                <a class="nav-link">CONTACT</a>
              </li>
            </Link>

            {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Acti</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
          </ul>

          {/* <div class="search-bar">
                    <i ref={searchIconRef} className="search-icon fas fa-search">  
</i>
                    <input ref={searchInputRef} type="text" id="search-input" className="search-input" placeholder="Search for regions or places"/>
                </div> */}

          {/* <div class="search-bar">
                    <i className="search-icon fa fa-search"> 🔍 </i>
                    <input type="text" id="search-input" className="search-input" placeholder="Search for regions or places"/>
                </div> */}

          {/* <div className="form">
                    <select name="" id="" className="nav-select">
                        <option value="" className="nav-option">Choose a location</option>
                        
                            <option className="nav-option">
                                <Link to= '/olateju'>
                                    <li><a href="#" className="nav-option-href">72 Olateju street,Odi-olowo Mushin, Lagos state Mushin local goverment lagos</a></li>
                                </Link>
                            </option>

                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>
                        <option value="" className="nav-option"><a href="" className="nav-option-href"></a></option>

                    </select>
                </div> */}

          <div className="nav-register-button">
            <button className="nav-register-btn" onClick={openRegister}>
              Register
            </button>

            {isRegisterOpen && <Register onClose={closeRegister} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
