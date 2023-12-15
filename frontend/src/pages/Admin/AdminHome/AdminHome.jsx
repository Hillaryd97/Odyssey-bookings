import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

import Dashboard from "../../../components/Dashboard/Dashboard";
import AllHotels from "../../../components/AllHotels/AllHotels";

const AdminHome = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "allHotels":
        return <AllHotels />;
      case "allCustomers":
        return "Customers";
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="images/odyssey copy.jpeg" alt="Logo" className="nav-img" />
        </a>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 px-0">
            <div className="d-flex flex-column admin-nav">
              <button
                to={"/adminHome"}
                className={`admin-nav-button ${
                  activeSection === "dashboard" && "active"
                }`}
                onClick={() => setActiveSection("dashboard")}
              >
                Dashboard
              </button>
              <button
                to={"/allHotels"}
                className={`admin-nav-button ${
                  activeSection === "allHotels" && "active"
                }`}
                onClick={() => setActiveSection("allHotels")}
              >
                Hotels
              </button>
              <button
                to={"/allCustomers"}
                className={`admin-nav-button ${
                  activeSection === "allCustomers" && "active"
                }`}
                onClick={() => setActiveSection("allCustomers")}
              >
                Customers
              </button>
            </div>
          </div>

          <div className="col-10 overflow-hidden mt-4">{renderSection()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
