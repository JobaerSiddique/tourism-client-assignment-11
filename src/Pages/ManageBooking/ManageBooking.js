import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';


const ManageBooking = () => {
    const [books,setBooks]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res=>res.json())
        .then(data=>{
           console.log(data)
           setBooks(data)
        })
    },[])
    const handleDeleteOn=(id)=>{
        const procced = window.confirm("are you Want to delete This Book")
        if(procced){
         fetch(`http://localhost:5000/bookings/${id}`,{
             method:"DELETE",
         })
         .then(res=>res.json())
         .then(data=>{
             console.log("delete",data)
            
             if(data.deletedCount >0){
                const remaining = books.filter(bo=> bo._id !== id)
                setBooks(remaining)
                toast.success("delete Suceesfully")
             }
         })
        }
        else{toast.error("Please Try Again")}
        
     }
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
                const remaining = books.filter(b=> b._id !== id)
                setBooks(remaining)
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
            <h1 className='text-rose-700 font-semibold lg:text-xl '>My Bookings : {books.length}</h1>
            <div className="overflow-x-auto my-10">
  <table className="table w-full">

    <thead>
      <tr className='text-center'>
        <th>CUSTOMER NAME</th>
        <th>LOCATION</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>PRICE</th>
        <th>PERSON</th>
        <th>TOTAL PRICE</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(book=><tr className='text-center' key={book._id} book={book} >
            
            <td>{book.customerName}</td>
            <td>{book.location}</td>
            <td>{book.email}</td>
            <td>{book.phone}</td>
            <td>{book.price}</td>
            <td>{book.person}</td>
            <td>$ {book.totals} <span>including Vat (5%)</span></td>
            <td><button onClick={()=>handleDelete(book._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
          </tr>)
      }
      
    
     
      
      
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default ManageBooking;