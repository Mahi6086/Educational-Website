import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=> {
        fetch('./code1.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 courses-title">Courses</h1>
                <div className="dash"></div>
            </div>
            
            <div className="courses-container">
            {
                courses.map(course => <Course
                key={course.name}
                course={course}
                ></Course>)
            }
            
        </div>
        </div>
    );
};

export default Courses;