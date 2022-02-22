import React from 'react';
import PropTypes from 'prop-types';


const Header = ({loadRecords, tagline, data, myStoreId})=> { 

      
    const viewForm =()=>{
         const myPass= prompt('enter password');
          if (myPass ==="pass"){
            const x = document.querySelector(".addRecordForm");
            const y = document.querySelector(".inventory-div");
         return x.style.visibility="visible", y.style.visibility="visible";
          }else{
              return alert("you are not authorized!");
          }
            
    };
    
    return (
    <div className='welcome-div'>
    <div className='header-background'>
    <h1 className='App-header'>
    </h1>
    </div>
    <br></br>
    <h1>M Howels Vinyl Ltd</h1>
    <div className='header-div'>
    <span className='Header-Span'>{`Welcome to the ${myStoreId} Store! ${tagline}`}</span><br></br>
    <div className='button-div'>
    <button id="header-button" className='btn btn-primary' onClick={loadRecords}>Load Record Collection</button><br></br>
    <button id="header-button" className='btn btn-info' onClick={viewForm}>Add/Delete record</button><br></br>
    </div>
    </div>
    </div>
)};

Header.propTypes ={
    tagline: PropTypes.string.isRequired,
    storeId: PropTypes.number.isRequired,
    records: PropTypes.object
};

export default Header;