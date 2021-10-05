import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css'
const Service = (props) => {
  console.log(props)
    const{title,img,instructor,avg,rating,price} = props.service;
    
    return (
        <div className="mb-5">
  <div className="col">
    <div className="service h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="">{title}</h3>
        <h5>{instructor}</h5>
        <div>
            <small style={{color:'#6C7562', fontWeight:'bolder', marginRight:"3px"}}>{avg}</small>
            <FontAwesomeIcon style={{color:'gold'}} icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color:'gold'}} icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color:'gold'}} icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color:'gold'}} icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon style={{color:'gold'}} icon={faStarHalfAlt}></FontAwesomeIcon>
            <small style={{color:'#6C7562', fontWeight:'bolder'}}>{rating}</small>
        </div>
        <h5 style={{fontWeight:"bolder", color:"orange"}}>Price: ${price}</h5>
        <div className="d-flex text-center mx-auto w-75 m-3">
          <div>
          <button style={{width:"200px"}}  type="button" class="btn btn-outline-warning text-white p-3 me-5 fw-bolder"> <FontAwesomeIcon style={{marginRight:'5px',color:'#FFC107'}} icon={faShoppingCart}></FontAwesomeIcon>add to cart</button>
          </div>
          <div>
          <button style={{width:"200px"}} type="button" class="btn btn-outline-warning text-white p-3 fw-bolder">More Details..</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Service;