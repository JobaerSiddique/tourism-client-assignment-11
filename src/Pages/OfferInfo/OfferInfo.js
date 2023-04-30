import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { SlLocationPin } from 'react-icons/sl';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const OfferInfo = () => {
   const {tourName,img,day,night,location,Min,descrip,price} = useLoaderData()
   const {user}= useContext(AuthContext)
   const { register, formState: { errors }, handleSubmit } = useForm();
   const settings = {
   dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 3000
  };
  const total =(price,person)=>{
    let garandTotal=0;
    let tax= 0.05
    const prices = (price);
    
    const persons =parseInt(person);
    
    const subTotal =  parseInt(garandTotal+prices*persons);
    
    const vat= parseInt(subTotal*tax);
    
    const totals = parseInt(subTotal+vat)
    const total = JSON.stringify(totals)
   
    return total;
  }
const navigate = useNavigate()
  const handleBook =(data)=>{
   
    const firstName = data.firstName;
    const LastName = data.lastName;
    const phone = data.phone;
    const adult = data.adult;
    const person= data.person;
    const message = data.message
    const price = data.price
    // total(data.price,data.person)
    const totals = total(price,person)

    const bookings = {
      
       customerName: (`${firstName} ${LastName}`),
       email:user.email,
       phone,
       adult,
       person,
       message,
       totals,
       location, 
       price,
       tourName
       
    }
    fetch('https://tourisum-server.vercel.app/bookings',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookings)
    }) 
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        console.log(data)
        navigate('/mybooking')
      toast.success(`Booking Succesfully ${location}`,{
        duration:6000
      })
     
      }
      
    })  
    
    
  }
    return (
        <div className='mt-20 grid gap-20 grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            <div>
            <div className='mb-10 p-3 grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-1 '>
                <div className=' mr-10'>
                     <h3 className='text-orange-600 font-bold'>Duraton</h3>
                    <p className='font-semibold'>{day} & {night}</p>
                </div>
                <div>
                     <h3 className='text-orange-600 font-bold'>Tour Type</h3>
                    <p className='font-semibold'>Daily Tour</p>
                </div>
                <div className=''>
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
            <h1 className='text-3xl font-bold text-orange-600 text-center underline mt-10'>About {location}</h1>
            <h3 className='text-2xl p-2 font-semibold underline mt-10'>Description:</h3>
            <p className='text-xl p-2 font-semibold text-justify'>{descrip}</p>
         </div>
            </div>
            <div>
                <div className='flex justify-between w-full h-16 bg-slate-900 p-4 rounded text-white'>
                    <div>
                        <h2 className='text-xl font-bold'>Book This Tour</h2>
                    </div>
                    <div>
                       <h5 className='text-xl font-semibold' ><span className='text-orange-600 font-bold text-2xl'> ${price}</span> Per Person</h5>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                 <h2 className=" text-center text-2xl font-bold underline">Booking Form</h2>
                 <form onSubmit={handleSubmit(handleBook)} >
                    <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">First Name</span>
    
                   </label>
                 <input type="text" 
                 placeholder="Enter First Name" 
                 {...register("firstName", { required: true })}
                 className="input input-bordered w-full max-w-xs" />
                 {errors.firstName?.type === "required" && <p className='text-red-600 mt-2'>{errors.firstName?.message}</p>}
  
</div>
                        </div>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Last Name</span>
    
                   </label>
                 <input type="text" 
                 placeholder="Enter Last Name" 
                 {...register("lastName", { required: true })}
                 className="input input-bordered w-full max-w-xs" />
  
</div>
                        </div>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Phone Number</span>
    
                   </label>
                 <input type="number" 
                 placeholder="Enter Phone Number" 
                 {...register("phone", { required: true })}
                 className="input input-bordered w-full max-w-xs" />
                 {errors.firstName?.type === "required" && <p className='text-red-600 mt-2'>{errors.firstName?.message}</p>}
  
</div>
                        </div>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Last Name</span>
    
                   </label>
                 <input type="email" 
                 placeholder="Enter Last Name" 
                 value={user?.email}
                 {...register("email", { required: true })}
                 className="input input-bordered w-full max-w-xs" />
  
</div>
                        </div>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Adult</span>
    
                   </label>
                   <select 
                   {...register("adult", { required: true })}
                   className="select select-bordered w-full max-w-xs">
 
  <option disabled>Adult</option>
  <option>01</option>
  <option>02</option>
  <option>03</option>
  <option>04</option>
  <option>05</option>
  <option>06</option>
  
</select>
                 {errors.adult?.type === "required" && <p className='text-red-600 mt-2'>{errors.adult?.message}</p>}
  
</div>

                        </div>
                        <div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Person</span>
    
                   </label>
                   <select 
                   {...register("person", { required: true })}
                   className="select select-bordered w-full max-w-xs">
 
  <option disabled>Person</option>
  <option>01</option>
  <option>02</option>
  <option>03</option>
  <option>04</option>
  <option>05</option>
  <option>06</option>
  
</select>
                 {errors.adult?.type === "required" && <p className='text-red-600 mt-2'>{errors.adult?.message}</p>}
  
</div>
                        </div>
                        

                    </div>
                    <div>
                        <div className="form-control w-full ">
                    <label className="label">
                    <span className="label-text">Price</span>
    
                   </label>
                 <input type="text" 
                 placeholder="Enter First Name" 
                 value= {(price)}
                 {...register("price",{required:true} )}
                
                 className="input input-bordered w-full max-w-xs " />
                 {errors.firstName?.type === "required" && <p className='text-red-600 mt-2'>{errors.firstName?.message}</p>}
  
</div>
                        </div>
                    <div className="form-control mt-5">
  <label className="label">
    <span className="label-text">Your Message</span>
    
  </label> 
  <textarea 
  className="textarea textarea-bordered h-24 w-full "
  {...register("message", { required: true, })}
   placeholder="Message"/>
    {errors.message?.type==="required " && <p className='text-red-600 mt-2'>{errors.message?.message}</p>}
    {errors.message?.type==="maxLength" && <p className='text-red-600 mt-2'>{errors.message?.message}</p>}
  
 
</div>        
                    <input className='btn btn-outline btn-warning w-full mt-10' type="submit" value="Book Now"  />
                 </form>
                 
  </div>
</div>
            </div>
        </div>
    );
};

export default OfferInfo;