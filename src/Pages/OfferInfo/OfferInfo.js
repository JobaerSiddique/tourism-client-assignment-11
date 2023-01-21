import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from 'react-slick';
import { SlLocationPin } from 'react-icons/sl';
const OfferInfo = () => {
   const {tourName,img,day,night,location,Min,descrip} = useLoaderData()

   const settings = {
   dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 3000
  };
    return (
        <div className='mt-20 grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            <div className='mb-10 flex p-3'>
                <div className=' mr-10'>
                     <h3 className='text-orange-600 font-bold'>Duraton</h3>
                    <p className='font-semibold'>{day} & {night}</p>
                </div>
                <div>
                     <h3 className='text-orange-600 font-bold'>Tour Type</h3>
                    <p className='font-semibold'>Daily Tour</p>
                </div>
                <div className='ml-10'>
                     <h3 className='text-orange-600 font-bold'>Minimum Group Member</h3>
                    <p className='font-semibold'>{Min}</p>
                </div>
            </div>
       <Slider className='w-full mb-10 ' {...settings}>
          <div>
            <img src={img[0]} alt="" />
          </div>
          <div>
          <img src={img[1]} alt="" />
          </div>
          <div>
          <img src={img[2]} alt="" />
          </div>
         </Slider>
         <div className='p-3' >
            <h4 className='font-bold text-orange-600 text-2xl flex '><SlLocationPin className='mt-1 mr-5'/>  {location}</h4>
            <h1 className='font-bold text-slate-900 text-2xl mt-10'>{tourName}</h1>
         </div>
         <div>
            <h1 className='text-5xl font-bold text-orange-600 text-center'>About {location}</h1>
            <h3 className='text-xl p-2 font-semibold underline mt-10'>Description:</h3>
            <p className='text-xl p-2 font-semibold text-justify'>{descrip}</p>
         </div>
        </div>
    );
};

export default OfferInfo;