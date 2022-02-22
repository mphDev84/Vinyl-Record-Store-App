import React from 'react';
import { formatPrice } from './helpers';

const EditRecordForm = ({index, data, updateRecord, removeRecord})=>{

const handleChange=(e)=>{

const updatedRecord = {
    ...data[index],
    //overwrite the value that is currently in state for whatever the user entered
    [e.currentTarget.name]: e.currentTarget.value, //user-input value

};
updateRecord(index, updatedRecord);//update record and send data up to App.js
};

  return  (
 
  <div className='record-edit'>
  {/**Here, our inputs have values set to the STATE values, in App.js. If a change is made
  the onChange method kicks in, but react prevents any changes to STATE. See above */}    
  <input className="edit-form-inputs" type="text" name="name" onChange={handleChange} value={data[index].name} />
  <input className="edit-form-inputs" type="text" name="description" onChange={handleChange} value={data[index].description} />
  <input className="edit-form-inputs" type="text" name="price" onChange={handleChange} value={data[index].price} />
  <input className="edit-form-inputs" type="text" name="id" onChange={handleChange} value={data[index].id} />
  <button id="remove-button" className="btn btn-danger" onClick={()=>removeRecord(index)}>Remove Record</button>
  </div>

  )
};

export default EditRecordForm;