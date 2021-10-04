import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css'
const Service = (props) => {
  console.log(props)
    const{title,img,instuctor,avg,rating,price} = props.service;
    
    return (
        <div className="">
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class={title}>Card title</h3>
        <h4>{instuctor}</h4>
        <div>
            <small>{avg}</small>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <small>{rating}</small>
        </div>
        <h5>{price}</h5>
      </div>
    </div>
  </div>
</div>
    );
};

export default Service;