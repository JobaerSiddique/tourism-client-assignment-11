import React from 'react';
import "./BannerItems.css"
const BannerItems = ({banner}) => {
   const{prev,next,id,img,head,des} =banner
    return (
       
            <div id={`slide${id}`} className="carousel-item relative w-full  ">
          <div className='img-gradient'>
          <img  src={img} className="w-full" />
          </div>
          <div className="absolute  transform -translate-y-1/2 left-10 right-8 top-2/4">
            <h3 className='text-white mt-5 text-3xl lg:text-7xl text-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse  '>{head}</h3> <br />
            <p data-aos="fade-up"
     data-aos-duration="3000" className='text-white mt-5 lg:mt-10 w-50 w-50 text-xl lg:w-1/2 text-2xl text-justify'>{des}</p>
            <div className="btn btn-primary mt-9 lg:mt-20">Explore</div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4 m-5 ">
            <a href={`#slide${prev}`} className="btn btn-circle btn-success mr-8">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle btn-primary">❯</a>
            
          </div>
          
        </div> 
      
    );
};

export default BannerItems;