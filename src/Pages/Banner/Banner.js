import React from 'react';
import img1 from "../../assets/banner/banner-1.jpg";
import img2 from "../../assets/banner/banner-2.jpg";
import img3 from "../../assets/banner/banner-3.jpg";
import BannerItems from './BannerItems';
const Banner = () => {
   const banneritem=[
    {
        prev:3,
        id:1,
        next:2,
        img:img1,
        head:"Rangamati",
        des:"Kaptai Lake is a man made lake in south-eastern Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. "
    
    },
    {
        prev:1,
        id:2,
        next:3,
        img:img2,
        head:"Cox's Bazar",
        des:"The beach in Cox's Bazar is the main attraction of the town with an unbroken length of 150 km (93 mi) also termed the longest natural unbroken sea beach in the world. "
    },
    {
        prev:2,
        id:3,
        next:1,
        img:img3,
        head:"Nilgri",
        des:"If you want to touch the clouds, you will have to go to Nilgiri, Bandarban. At Nilgiri, the cloud will come to you, even you can catch it with your hands. On the above, the blue sky, and the white cloud are playing in the mountain of Nilgiri."
    }
   ]
   
  
    return (
        <div className="carousel w-full  ">
        {
            banneritem.map(banner=><BannerItems
            key={banner.id}
            banner={banner}
            >

            </BannerItems>)
        }
         
        
        
      </div>
    );
};

export default Banner;