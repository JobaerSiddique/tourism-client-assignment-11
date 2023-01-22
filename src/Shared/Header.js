import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo.jpg"
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const signOut =()=>{
    logOut()
  }
    const menuItems=<>
    <li><Link to="/">Home</Link></li>
    {user && <>
      <li><Link to="/mybooking">MyBookings</Link></li>
      <li><Link to="/managebooking">ManageBooking</Link></li>
    </>}
  {user?.uid? <li><button onClick={signOut}>logout <span>{user?.displayName}</span></button></li> :  <li><Link to="/login">Login</Link></li>}
    </>
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
      {menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
        <img className='w-24 h-24' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuItems}
    </ul>
  </div>
 
</div>
    );
};

export default Header;