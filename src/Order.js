import React from 'react';
import { formatPrice } from './helpers';
import PropTypes from 'prop-types';


const Order = ({index, cart, data, removeFromOrder})=>{

        const orderData = index;
       const count = cart[index];
       
        const orderRecord  = data[orderData];
        const isAvailable=orderRecord;

        if (!orderRecord)return null;
        if (!isAvailable){
            return (
                <li index={index}>
            Sorry {orderRecord ? orderRecord.name: 'record'} is no longer available
            </li>
            );
        };
        return (
           
            <React.Fragment>
             
            <li index={index}>
            <div className='order-area'>
            <p className='order-count'>
            <strong>{`${count}`}</strong></p>
            <p className='order-name'>
            {`${orderRecord.name}`}</p>
            <p className='order-price'>
            {`Price: ${formatPrice(orderRecord.price*count)}`}</p>
            <button className='remove-button' onClick={()=>removeFromOrder(index)}>&times;</button>
            <br></br>
            </div>
            </li>
            
            </React.Fragment>
            
            
        );
        };

export default Order;