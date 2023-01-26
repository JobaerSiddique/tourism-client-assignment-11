import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    const {customerName,email,phone,totals,tourName} = data

    const handlePayment = ()=>{
        const Info = {
            total_amount:totals,
            cus_name:customerName,
            cus_email:email,
            cus_phone:phone,
            product_name:tourName,
            paymentStatus:'pending'
        }
        console.log(Info)
        fetch('https://tourism-server-assi-11.vercel.app/init',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            window.location.replace(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='my-20'>
            <button onClick={handlePayment} className='btn btn-primary'>Pay</button>
        </div>
    );
};

export default Payment;