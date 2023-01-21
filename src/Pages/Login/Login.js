import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from "../../assets/login/login.jpg"
import glogo from "../../assets/logo/glogo.png"
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {logIn,googleLogIn}= useContext(AuthContext)
    const location= useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/offers/:id";
   const handleLogin=(data)=>{
    console.log(data)
    logIn(data.email,data.password)
    .then((result)=>{
      const user = result.user;
      console.log("user log in",user)
      toast(`Welcome to ${user.displayName}`)
      navigate(from,{replace:true})
    })
    .catch((error)=>{

    })
   }

   const gLogIn =()=>{
    googleLogIn()
    .then((result)=>{
      const user= result.user;
      console.log("google Provider",user)
      toast(`Welcome to ${user.displayName}`)
      navigate(from,{replace:true})
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
      <h3 className='text-center text-2xl font-semibold text-cyan-400'>Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
   </label>
  <input 
  type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required: "Please Enter Your Email" })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.email?.type ==="required" && <p className='text-red-500 mt-1' >{errors.email?.message}</p>}
  
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
   </label>
   <input 
  type="password" 
  placeholder="Enter Your Email" 
  {...register("password", { required: "Password is Required",minLength:{value:6,message:"please 6 digits Must"} })} 
  className="input input-bordered w-full max-w-xs" />
  {errors.password?.type === 'required' && <p className='text-red-500 mt-1'>{errors.password?.message}</p>}
  {errors.password?.type === 'minLength' && <p className='text-red-500 mt-1'>{errors.password?.message}</p>}
  
</div>
<p className='mt-5'>Have a New User? <span className='text-orange-600'><Link to="/register">Please Sign Up</Link></span></p>
<input className="input input-bordered w-full max-w-xs btn btn-outline btn-info mt-5" type="submit" value="Login" />
      </form>
      <div className="divider">OR</div>
      <button className='btn glass btn-info hover:scale-110 ' onClick={gLogIn}><img width="40px" className='mr-4' src={glogo} alt="" /> Google</button>
        
        
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;