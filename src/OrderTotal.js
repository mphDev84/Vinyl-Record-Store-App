import React from 'react';
import { formatPrice } from './helpers';//imported function to format total to currency
import PropTypes from 'prop-types';

const OrderTotal=({cart, data})=>{

    //Prop-type data validation
    OrderTotal.propTypes ={
        data: PropTypes.object.isRequired,
        cart:PropTypes.object.isRequired
    };
    const cartIds = Object.keys({...cart});
   
   //calculate cart(order) total
    const orderTotal = cartIds.reduce((prevTotal, key)=>{
       
        const record = data[key];
        const cartCount = cart[key];
        return prevTotal+(cartCount*record.price);
    },0);

    return <div className='order-total'><strong>{`Total: ${formatPrice(orderTotal)}`}</strong></div>
};

export default OrderTotal;