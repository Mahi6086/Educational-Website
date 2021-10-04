import React from 'react';
import './MenuBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const MenuBar = () => {
    return (
        <div className="MenuBar-container fs-1">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo-img">
                  {/* <img className="w-75" src={logo} alt="" /> */}
                  <h1><FontAwesomeIcon style={{fontSize: '45px'}} icon={faGraduationCap}></FontAwesomeIcon>CODELEARN</h1>
                 
                </div>
              </div>
              <div className="col-md-9">
                <div className="menu-container">
                  <ul className="d-flex align-items-end justify-content-end">
                    <Link to="/home" className="menubar">
                      <li>Home</li>
                    </Link>
                    <Link to="/about" className="menubar">
                      <li>About</li>
                    </Link>
                    <Link to="/services" className="menubar">
                      <li>Services</li>
                    </Link>
                    <Link to="contact" className="menubar">
                      <li>Contact</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default MenuBar;