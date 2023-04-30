import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddOfferings = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const imageKey= process.env.REACT_APP_Image_Key

    const handleAddService =(data)=>{
      
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`
        fetch(url,{
          method:"POST",
          body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
          console.log(imageData)
          if(imageData.success){
            const adding ={
                tourName:data.tourName,
                day:data.days,
                night:data.night,
                location:data.location,
                group:data.group,
                Min:data.min,
                price:data.price,
                img:imageData.data.url,
                descrip:data.descrip,
                short:data.short
    
              }
                console.log(adding)
              fetch('https://tourisum-server.vercel.app/offers', {
                method: 'POST', 
                headers: {
                  'content-type': 'application/json',
                },
                body:JSON.stringify(adding),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                  if(data.insertedId){
                    toast.success("Adding Sucessfully")

                  }
                  
                })
                // .catch((error) => {
                //   console.error('Error:', error);
                // });
          }
         
          // 
        })
    }
   
    return (
        <div className='my-20'>
            <h1 className='text-xl text-center font-semibold lg:text-5xl lg:font-bold text-slate-700'>Add Tours Offerings Section</h1>

            <form onSubmit={handleSubmit( handleAddService)} className='my-10 '>
            
            <div className=" my-2  py-5 card w-full bg-base-100 shadow-xl flex items-center justify-end">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Tour Name</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  {...register("tourName", { required: true })} 
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Days</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  {...register("days", { required: true })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Night</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  {...register("night", { required: true })} 
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Location</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  {...register("location", { required: true })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Group</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  {...register("group", { required: true })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Minimum Member</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  {...register("min", { required: true })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Price</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Type here" 
  {...register("price", { required: true })}
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Image</span>
    
  </label>
  <input 
  type="file"
  {...register("img", { required: true })} 
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Description</span>
    
  </label>
  <textarea  
  type="text" 
  placeholder="Type here" 
  {...register("descrip", { required: true })}
  className="textarea textarea-bordered h-24 w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Shorts Description</span>
    
  </label>
  <textarea
  type="text" 
  placeholder="Type here" 
  {...register("short", { required: true })}
  className="textarea textarea-bordered h-24 w-full max-w-xs" />
  
</div>
<input className='btn btn-outline btn-info input input-bordered w-full max-w-xs mt-5 ' type="submit" value="Add Offering" />
</div>
            
            
            
            
            
            
           
            </form>
        </div>

    );
};

export default AddOfferings;