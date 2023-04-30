import React from 'react';
import { Link } from 'react-router-dom';


const BookingInfo = ({booking, handleDelete}) => {
    const {_id,location,customerName,email,phone,person,totals,price}= booking
    console.log(booking)

   
    return (
        <tr className='text-center'>
        
        <td className='text-center'>{customerName}</td>
        <td className='text-center'>{location}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className='text-center'>{price}</td>
        <td className='text-center'>{person}</td>
        <td className='text-center font-bold'>$ {totals} 
         <span>(incluing Vat 5%)</span></td>
         <td><Link to={`/payment/${_id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link></td>
        <td><button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
      </tr>
    );
};

export default BookingInfo;