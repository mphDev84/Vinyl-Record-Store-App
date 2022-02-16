import React from 'react';
import EditRecordForm from './EditRecordForm';

const Inventory=({index, cart, data, updateRecord, removeRecord})=>{

    return (
        <React.Fragment>
        
        <EditRecordForm
        
        index={index}
        data={data} 
        updateRecord={updateRecord} 
        removeRecord={removeRecord}
        />
        
       </React.Fragment>
    )

};

export default Inventory;