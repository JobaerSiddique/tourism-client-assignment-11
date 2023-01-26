import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import BookingInfo from './BookingInfo/BookingInfo';

const MyBooking = () => {
    const[bookings,setBookings]=useState([]) 
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBookings(data)
        })
    },[user])
    const handleDelete=(id)=>{
        const procced = window.confirm("are you Want to delete This Book")
        if(procced){
         fetch(`http://localhost:5000/bookings/${id}`,{
             method:"DELETE",
         })
         .then(res=>res.json())
         .then(data=>{
             console.log("delete",data)
            
             if(data.deletedCount >0){
                const remaining = bookings.filter(b=> b._id !== id)
                setBookings(remaining)
                toast.success("delete Suceesfully")
             }
         })
        }
        else{toast.error("Please Try Again")}
        
     }
    
    return (
        
        <div className='my-20 p-5'>
          <h1 className='text-center text-xl lg:text-5xl text-purple-700 font-bold'>Welcome to Safir Travels</h1>
          <div className='mt-10'>
            <h1 className='text-rose-700 font-semibold lg:text-xl '>My Bookings : {bookings.length}</h1>
            <div className="overflow-x-auto mt-10">
  <table className="table w-full">
   
    <thead>
      <tr className='text-center'>
      
        <th>Customer Name</th>
        <th>Location</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Price</th>
        <th>Person</th>
        <th>Total Price</th>
        <th>Pay</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingInfo
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        ></BookingInfo>)
      }
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default MyBooking;