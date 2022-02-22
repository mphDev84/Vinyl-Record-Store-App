import React, { useEffect } from 'react';
import OrderTotal from './OrderTotal';

const CheckoutForm = ({cart, data})=>{

  //the below function/hook retrieves the value of the checked radio input from the checkout form below
  let radioFormValue= (useEffect(() =>{
    const radioForm = document.getElementsByName('payment-method');  
    for(var i = 0; i < radioForm.length; i++) {
        if(radioForm[i].checked)
        radioFormValue= radioForm[i].value;
        console.log(radioFormValue)
    }
  }));
    return (

        <div className='checkout-div'>
        <header className='checkout-header'><h3>Checkout</h3></header>
        <form action="https://httpbin.org/post" class="form" method="POST" target="_blank">
      <h2 className='checkout-address-header'>Address</h2>
      <div className='checkout-address'>
          <address>Matthew Howels <br />
          100 The Ridgeway <br />
          Croydon <br />
          London <br />
          XX99 9AA</address>
      </div>
      <fieldset>
          <legend className='checkout-address-header'>Payment Method</legend>
          
      <div class="form-radios">
        <div class="form-radio"><img src="https://img.icons8.com/color/48/000000/visa.png"/>Visa Payment
          <input id="visa" name="payment-method" type="radio" value="Visa" />
        </div>

        <div class="form-radio"><img src="https://img.icons8.com/fluency/48/000000/paypal.png"/>PayPal
          <input id="paypal" name="payment-method" type="radio" value="PayPal" />
        </div>

        <div class="form-radio"><img src="https://img.icons8.com/color/48/000000/mastercard.png"/>Master Card
          <input id="mastercard" name="payment-method" type="radio" value="Master Card" />
        </div>
      </div>
      </fieldset>
      <h2 className='checkout-address-header'>Billing</h2>
      <OrderTotal 
        cart={cart}
        data = {data}
      />
      <button id="buy-button" className='btn btn-primary' type="submit" target="_blank">Buy Now</button>
      </form>
        </div> 
       
    )};

export default CheckoutForm;