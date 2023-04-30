import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Payment = () => {
   const data = useLoaderData()
   const {customerName,email,totals} = data;

   const payment=()=>{
    const info = {
      
      total_amount: totals,
      cus_name: customerName,
      cus_email:email
      
  }
  console.log(info)
  fetch(`http://localhost:5000/init`,{
    method:"POST",
    headers:{
     
      'content-Type':'application/json'
    },
    body:JSON.stringify(info)
  })
        .then(res =>{
          if (res.status !== 200)  {
            console.log("error")
          } 
          else {
            res.json().then(data => {
              console.log(data)
            })
          }
        })
        .then(data => {
            console.log(data);
            window.location.replace(data)
        })
        
   }
    
    
    return (
        <div>

          <button onClick={payment} className='my-20 btn-btn-outline btn-info w-full'>Pay</button>
        </div>
    );
};

export default Payment;