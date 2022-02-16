import React from 'react';
import { formatPrice } from './helpers';//imported function to format total to currency

const OrderTotal=({cart, data})=>{

    const cartIds = Object.keys({...cart});
   
   
    const orderTotal = cartIds.reduce((prevTotal, key)=>{
       
        const record = data[key];
        const cartCount = cart[key];
        return prevTotal+(cartCount*record.price);
    },0);

    return <div className='order-total'><strong>{`Total: ${formatPrice(orderTotal)}`}</strong></div>
};

export default OrderTotal;