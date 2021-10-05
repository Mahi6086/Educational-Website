import { faFacebook, faFacebookMessenger, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Instructor.css'
const Instructor = (props) => {
    const {img,Expert,instructor, Experience} = props.instructor;
    return (
    <div className="mb-5">
        <div className="col">
        <div className="instructor h-100">
           <img src={img} class="card-img-top img-fluid w-50 mx-auto p-3" alt="..."/>
            <div className="card-body">
             <h3>{instructor}</h3>
             <small className="">{Expert}</small>
            <p className="text-white fw-bold">Experience: {Experience}</p>
            <div className="d-flex justify-content-around align-items-center text-center ">
                  <div style={{color:'#FFC107'}} className="icon rounded-circle">
                   <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </div>
                  <div style={{color:'#FFC107'}} className="icon rounded-circle">
                  <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
                  </div>
                  <div style={{color:'#FFC107'}} className="icon rounded-circle">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </div>
                  <div style={{color:'#FFC107'}} className="icon rounded-circle">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </div>
                  
                </div>
        </div>
        </div>
       </div>
    </div>
    );
};

export default Instructor;