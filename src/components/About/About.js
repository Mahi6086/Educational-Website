import React from 'react';
import './About.css';
import img1 from './img1.svg';
import img2 from './img2.svg';

const About = () => {
    return (        
        <div>           
            <div className="about-us p-5">
                <h1 className="text-center about ">The perfect platform to boost <br /> your technical skills
                </h1>
                <p style={{borderTop:"5px dotted #6C63FF", width:"20%", margin:"0px auto"}}></p>
                <div className="container mt-5 shadow rounded rounded-3 p-2">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="me-5">
                                <img style={{width:'500px', padding:"30px"}} src={img2} alt="" />
                            </div>
                            <div className="descrip p-5">
                                <h1>Learn to code, to develop your skills</h1>
                            <h5 className="mt-3 fs-3">To promote OPENNESS, INNOVATION, and EXPERIMENTATION in education by providing educators access to professional development courses and programs that will help them thrive and succeed in their careers.</h5>    
                            </div>
                        </div>
                    </div>
               </div>    
               <div className="container mt-5 shadow rounded rounded-3 p-5 mb-5">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="descrip">
                            <h1>Build up a Web Developer</h1>
                            <h5 className="mt-3 fs-3">Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.They are responsible for the look and functionality of the website or interface.</h5>
                            </div>
                            <div className="">
                                <img style={{width:'500px', padding:"50px"}} src={img1} alt="" />
                            </div>       
                        </div>
                    </div>
               </div>                  
              </div>   
        </div>
        
    );
};

export default About;


           