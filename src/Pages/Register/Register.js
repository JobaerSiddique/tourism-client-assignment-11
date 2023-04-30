import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import login from "../../assets/login/login.jpg"
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import glogo from "../../assets/logo/glogo.png"
import { toast } from 'react-hot-toast';
const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();  
  const {createUser,googleLogIn,updateUser} = useContext(AuthContext)
 
  const navigate = useNavigate()
  const handleRegister = (data)=>{
    console.log(data)
    createUser(data.email,data.password)
    .then((result)=>{
      const user = result.user;
      console.log(user)
      toast("User create Successfully")
      const userInfo ={
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{ 
        saveUser(data.name,data.email)
        toast.success('user create Successfully')
        navigate('/')
      })
      
      .catch(err=> console.log(err))
     
      
    })
    .catch((error)=>{
      
    })
    
  }

  const saveUser=(name,email)=>{
    const createUser = {
      name:name,
      email:email
    } 
    fetch('http://localhost:5000/users',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(createUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('user',data)
      
      
    })
  }
  const gLogIn =()=>{
    googleLogIn()
    .then((result)=>{
      const user= result.user;
      console.log(user)
      if(user?.uid){
        toast.success('Login Successfully')
        navigate('/')
      }
      else{
        const email=user.email;
        const googleInfo={
          name:user.displayName,
          email:email
        }
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(googleInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('googleLogin',data)
        })
      }
     
  
    
    })
   }
  
  return (
        <div className="hero   mt-20 mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-2/4 lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h3 className='text-center text-2xl font-semibold text-orange-400'>Register</h3>
            <form onSubmit={handleSubmit( handleRegister)}>
            <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
         </label>
        <input 
        type="text" 
        placeholder="Enter Your Name" 
        {...register("name", { required: "Name must be Required" })}
        className="input input-bordered w-full max-w-xs" />
        {errors.name?.type === "required" && <p className='text-red-500 mt-5'>{errors.name?.message}</p>}
        
      </div>
            <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
         </label>
        <input 
        type="email" 
        placeholder="Enter Your Email" 
        {...register("email", { required: "Email must be Required" })}
        className="input input-bordered w-full max-w-xs" />
        {errors.email?.type === "required" && <p className='text-red-500 mt-5'>{errors.email?.message}</p>}
        
      </div>
            <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
         </label>
        <input type="password" 
        placeholder="Enter Your Password" 
        {...register("password", { required: "Password is Must Required",minLength:{value:8,message:"Password Must be 8 Digits"} })}
        className="input input-bordered w-full max-w-xs" />
        {errors.password?.type === "required" && <p className='text-red-500 mt-5'>{errors.password?.message}</p>}
        {errors.password?.type === "minLength" && <p className='text-red-500 mt-5'>{errors.password?.message}</p>}
        
      </div>
      <p className='mt-5'>Already have an Account <span className='text-orange-600'><Link to="/login">Please Login </Link></span></p>
      <input className="input input-bordered w-full max-w-xs btn btn-outline btn-info mt-5" type="submit" value="Sign up" />
            </form>
      <div className="divider">OR</div>
     <button className='btn glass btn-info hover:scale-110 ' onClick={gLogIn}><img width="40px" className='mr-4' src={glogo} alt="" /> Google</button>
              
              
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;