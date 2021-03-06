import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container ">
          <div className="">
            <div className="row d-flex banner align-items-center justify-content-center">
              <MenuBar></MenuBar>
              <div className="col-md-6 heading">
                <h1 className="title">
                  THE BEST WAY <br /> TO LEARN TO CODE
                </h1>
                <p className="text-white text-center mt-3">
                Lifelong learning and professional development for educators go <br/> hand-in-hand with Canvas Network's open, online courses, taught by experts and institutions worldwide.
                </p>
                <button className="mt-3 about-btn">About Us</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Banner;