import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css'
const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

        useEffect(() => {
            fetch('./code3.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data));
        }, [])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 courses-title">Meet Our Instructors</h1>
                <div className="dash-in"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 instructors-container">
                {
                    instructors.map(instructor => <Instructor
                    key={instructor.Expert}
                    instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;