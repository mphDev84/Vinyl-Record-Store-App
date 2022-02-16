import React from 'react';
import { formatPrice } from './helpers';
import PropTypes from 'prop-types';

const Record = ({data, cart, index, addToOrder})=>{

 const myButtonAction = ()=>{
        // let newWin = window.open("about:blank", "hello", "width=400,height=400");
        // newWin.document.write("Hello, world!");
        const orderData = index;
        addToOrder(orderData);
             
     };

const propTypes={
    data: PropTypes.object.isRequired,
    index:PropTypes.string.isRequired,
    addToOrder:PropTypes.func.isRequired
};

const {id, name, image, category, description, price} = data[index];//destructured props, passed down from App.js

    return (
      
<div className='records-display'>
<li className='record-list'>
<div className='pic-div'>
<div className='record-data'>
    <h4 className='record-name'>{name}</h4>
    <p>{`Product ID: ${id}`}</p>
    <p>{`Category: ${category}`}</p>
    <p>{`${description}`}</p>
    <h4 className='price'>{` Price: ${formatPrice(price)}`}</h4>
    <br></br>    
    </div>
    <img className='image' src={image} />
    </div> 
    <button className='order-button btn btn-success' onClick={myButtonAction}>Add to Order</button>
</li>
</div>
        )
    }

export default Record;