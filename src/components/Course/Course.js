import React from 'react';
import './Course.css'
const Course = (props) => {
    const{img, name} =props.course;
    return (
        <div className="course-style">
            <img src={img} alt="" />
            <br /><br />
            <h4>{name}</h4> 
        </div>
    );
};

export default Course;