import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PaymentSuccess = () => {
    const data = useLoaderData()
    console.log(data)
    
    return (
        <div>
            <h1>this is success</h1>
        </div>
    );
};

export default PaymentSuccess;