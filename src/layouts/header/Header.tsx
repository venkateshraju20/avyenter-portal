import { NavLink } from "react-router-dom";
import AvyenterLogo from "../../assets/images/avyenter-logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xxl">
          <NavLink className="navbar-brand" to="#">
            <img src={AvyenterLogo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-black"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-black" to="/">
                  Company
                </NavLink>
              </li>
              <li className="nav-item me-3 dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-black"
                  to="/solutions"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item text-black" to="/">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-black" to="/">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-black" to="/">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-black" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-dark expert-btn" type="button">
              Speak to our Expert
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
