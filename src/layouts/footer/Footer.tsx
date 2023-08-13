import { NavLink } from "react-router-dom";
import AvyenterLogo from "../../assets/images/avyenter-logo-footer.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-950 py-5">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center pb-2">
            <NavLink className="navbar-brand col-md-3" to="/">
              <img src={AvyenterLogo} alt="Logo" />
            </NavLink>
            <div className="col-md-6 me-auto mb-2 mb-lg-0">
              <div className="row">
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/"
                  >
                    Company
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/solutions"
                  >
                    Solutions
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/careers"
                  >
                    Careers
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    className="text-gray-100 text-decoration-none"
                    to="/"
                  >
                    Resources
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex justify-content-md-end gap-4">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={LinkedInIcon} alt="LinkedInIcon" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img src={TwitterIcon} alt="LinkedInIcon" />
                </a>
              </div>
            </div>
          </div>
          <hr className="text-gray-100" />
          <div className="d-flex justify-content-between pt-2">
            <div className="text-gray-100">
              © 2023 Avynter. All Rights Reserved.
            </div>
            <div className="d-flex gap-4">
              <div className="text-gray-100">Privacy Policy</div>
              <div className="text-gray-100">Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
