import React, { useEffect, useState } from "react";
import Header from "./Header";
import myRecords from './data/sampleRecords'
import Record from "./Record";
import AddRecord from "./AddRecord";
import Order from "./Order";
import Inventory from "./Inventory";
import OrderTotal from "./OrderTotal";
import { Store } from "./Store";
import { createStore }from "redux";
import reducer from "./Store";
import PropTypes from 'prop-types';

/**THIS IS THE MAIN APP.js from which the Order, Inventory, and Record components are rendered. */

const App = (props) =>{

  const store = createStore(reducer);
  //declare state for data set (i.e. the vinly record collection)
  const [data, setData]=useState({
    
  });
  const myStoreId=props.match.params.storeId;


  useEffect(()=>{
      const dataFromStorage = localStorage.getItem("my-data");
      if(dataFromStorage){
          setData(JSON.parse(dataFromStorage))
      }
  },[setData]);
  
  useEffect(()=>{
      localStorage.setItem("my-data", JSON.stringify(data))
  },[data]);
  //declare state for user cart-orders 
  const [cart, setCart]=useState({
   
  });
  useEffect(()=>{
    const orderDatafromStorage = localStorage.getItem("my-order-data");
    if(orderDatafromStorage){
        setCart(JSON.parse(orderDatafromStorage))
    }
},[setCart]);

useEffect(()=>{
    localStorage.setItem("my-order-data", JSON.stringify(cart))
},[cart]);

//Prop-type data validation:
App.propTypes ={
    data: PropTypes.object.isRequired,
    cart:PropTypes.object.isRequired
};
const loadRecords = ()=>{
//loads a data set for a collection of records to the store
setData(myRecords);
};

//method to add a record to the collection
 const addRecord=(record)=>{
     const records= {...data}//take a copy of state
     records[`record${Date.now()}`]=record;//each new record gets a new key based on milliseconds from 1970

    setData(records);
 };
 //method to add a record to the cart
 const addToOrder=(key)=>{
       //1.Take a copy of state:
    const order = {...cart};
    //2.add to order/update number in order
    order[key] = order[key] + 1 || 1; // increments count of whatever record is in order
    //3. call setState to update order state
    setCart(order);
 };
//method to remove a record from the cart
 const removeFromOrder = (key)=>{
    //1.Take a copy of state:
    const order = {...cart};
    //2.remove this item from order
    delete order[key]; // increments count of whatever record is in order. 
    //3. call setState to update order state
    setCart(order);
};
const updateRecord = (key, updatedRecord) =>{
    //take a copy of the current state
    const records = {...data};
    //update that state
    records[key]=updatedRecord;
    //set to state
    setData(records);
};
const removeRecord = (key)=>{
    const records = {...data};
    const myCart = {...cart}
    delete records[key];
    delete myCart[key];
    setData(records);
    setCart(myCart);
   
};

        return (
        <div className="App">
        <Header 
        tagline={"Buy Some Records!"}
        myStoreId={props.match.params.storeId}
        age={Number(500)}
        loadRecords={loadRecords}
        data={data}
         />
         <AddRecord addRecord={addRecord} /> 
         <br></br>
         <div className="main-page-div">
         <ul className="records">
         <span className="inv-order-span">VINYLS</span>
            {Object.keys(data).map(key=>
            <Record 
            addToOrder={addToOrder}
            key={key} 
            index={key}//this allows us to pass the 'key' as a prop, otherwise we have no access. DEV TOOLS
            data={data}
            cart={cart}   //state is passed to 'Record'
            />
            )}
            </ul> 
            <div className="order-div">
            <span className="inv-order-span">ORDER</span>
            {Object.keys(cart).map(key=>
            <Order 
            key={key}
            index={key}
            cart={cart}
            data = {data}
            removeFromOrder={removeFromOrder}
            />
            )}
            <OrderTotal 
           // orderTotal={orderTotal}
            
            cart={cart}
            data = {data}
            />
            </div>
            <div className="inventory-div">
            <span className="inv-order-span">INVENTORY</span>
            {Object.keys(data).map(key=>
            <Inventory 
            key={key}
            index={key}
            cart={cart}
            data = {data}
            updateRecord={updateRecord}
            removeRecord={removeRecord}
            />
            )}
            </div>
            </div>
        </div>
       
        )
    };

export default App;
