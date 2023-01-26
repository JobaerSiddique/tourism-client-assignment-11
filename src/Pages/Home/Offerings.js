import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OfferingsCard from './OfferingsCard';

const Offerings = () => {
    const [offerings,setOfferings]= useState([])

    useEffect(()=>{
        fetch('https://tourism-server-assi-11.vercel.app/offers')
        .then(res=>res.json())
        .then(data=>{
            setOfferings(data)
        })
    },[])
    return (
        <div className='m-10'>
            <h1 data-aos="fade-down-right"  data-aos-duration="3000" className='text-center text-2xl lg:text-5xl font-bold text-cyan-500 underline'>Our Tour Offerings </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10" >
          {
            offerings.map(offer=><OfferingsCard
            key={offer.id}
            offer={offer}
            >

            </OfferingsCard>)
          }
          </div>
        </div>
    );
};

export default Offerings;