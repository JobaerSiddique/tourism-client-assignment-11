import React from 'react';
import "./offercard.css"
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GiDuration } from "react-icons/gi";
const OfferingsCard = ({offer}) => {
   const {_id,tourName,day,night,short,img,price}=offer;
    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:transition delay-700 duration-300 ease-in-out">
        <div className='relative'>
        <figure className="px-10 pt-10  ">
          <img src={img[0]} alt="Shoes" className="rounded-xl" />
          <div className='absolute offer mt-44'>
            <p className='text-white font-bold animate-bounce flex justify-center' > <GiDuration className='mr-2 mt-1'/>  {day} & {night}</p>
          </div>
        </figure>
        </div>
        <div className="card-body items-center text-center">
          <h5 className="card-title">Tours Place : {tourName}</h5>
          <p className='text-justify'>{short}</p>
          <p className='font-semibold text-amber-500'>Price : {price} Per Person</p>
          <div className="card-actions mt-5">
            <Link to={`/offers/${_id}`} className="btn btn-outline hover:btn-warning text-cyan-500">Purchase Now  <AiOutlineArrowRight className='hover:text-orange-500'></AiOutlineArrowRight></Link>
          </div>
        </div>
      </div>
    );
};

export default OfferingsCard;