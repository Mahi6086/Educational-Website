import React from 'react';
import './IntroParts.css'
import { faGraduationCap, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IntroParts = () => {
    return (
        <div className="intro-part mt-5">
            <div className="row d-flex  align-items-center justify-content-center">
                <div className="col-md-8">
                  <h1 className="heading">
                  Code Learn | Global<br /> Skills Development and Digital <br />Service Providing Institute
                  </h1>
                  <p className="description text-center w-50">
                  Code Learn is a purpose-driven, global skill development organization. It was created with a desire to make a tangible difference in the lives of the underprivileged, disadvantaged, and underserved population as a whole. The youth, especially the female community, who struggle to find a comfortable living, is our prime concern. 
                  </p>
                </div>
                <div className="col-md-4">
                <div className="row  d-flex align-items-center justify-content-center">
                    <div className="col-md-6 Students">
                    <div className="Graduate-Students">
                        <FontAwesomeIcon icon={faGraduationCap}/>
                    </div>  
                     <h3>70k+</h3>
                     <h4>Graduate Students</h4>
                     </div>
                     
                    <div className="col-md-6 Mentors">
                    <div className="Experts-Mentors">
                        <FontAwesomeIcon icon={faUserGraduate}/>
                    </div> 
                    <h3>75k+</h3>
                    <h4>Experts Mentors</h4>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default IntroParts;