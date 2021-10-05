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
        </div>
        </div>
       </div>
    </div>
    );
};

export default Instructor;