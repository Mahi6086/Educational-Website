import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Code learn</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose.
                  </small>
                </p>
                <p className="mt-5">
                  <small>Code learn © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container mt-5 fw-bolder">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Contact</li>
                  <li className="footer-menu"> About</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3 className="sign-up">Sign up</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="map d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <p> <FontAwesomeIcon className="foter-phone-icon me-2" icon={faMapMarkerAlt} />
                    House# 82, Road# 19/A,<br/> Block# E, Banani, Dhaka-1213
                    </p>
                  </div>
                  </div>
                <div className="phone d-flex align-items-center justify-content-center ">
                  <div>
                    <h5 className="me-4"><FontAwesomeIcon className="foter-phone-icon" icon={faPhoneSquareAlt}></FontAwesomeIcon> +8801762595554</h5>
                    <h5>+8801962595554</h5>
                    <h5>+8801562595554</h5>
                    <h5>+8801362595554</h5>
                    </div>
                </div>
                  <div>
                    <div><FontAwesomeIcon className="foter-phone-icon" icon={faEnvelope}></FontAwesomeIcon> hello@codelearnbd.com</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;