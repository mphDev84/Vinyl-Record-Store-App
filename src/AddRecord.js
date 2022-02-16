import React from "react";
import PropTypes from "prop-types";

const AddRecord = ({addRecord})=>{

    const idRef=React.createRef();
    const nameRef=React.createRef();
    const priceRef=React.createRef();
    const catRef=React.createRef();
    const descRef=React.createRef();
    const imageRef=React.createRef();

    //propType data validation
     const propTypes ={
        addRecord: PropTypes.func.isRequired
    };

  const  createRecord=(e)=>{
       
        e.preventDefault();//this stops the addRecord form from refreshing

        const record = {
            name:nameRef.current.value,
            id:idRef.current.value,
            price:parseFloat(priceRef.current.value),
            category:catRef.current.value,
            image:imageRef.current.value,
            description:descRef.current.value,
        }
        
        if(!record.name&&!record.id&&!record.price&&!record.description){
            alert("please enter record data")
        }else{
        addRecord(record);
        }
     e.currentTarget.reset();
    }
        return (

            <form className="addRecordForm" onSubmit={createRecord}>
            <div className="form-div-01">
            <input name="name" ref={nameRef} type="text" placeholder="Name" />
            <input name ="price" ref={priceRef} type="text" placeholder="Price" />
            <input name ="id" ref={idRef} type="text" placeholder="Id Number" />
            <select name ="category" ref={catRef}>
                <option value="blues">Blues</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
            </select>
            </div>
            <div className="form-div-02">
            <textarea name ="description" ref={descRef} placeholder="Desc"></textarea>
            <input name = "image" ref={imageRef} type="text" placeholder="Image" />
            <button className="btn btn-dark" type="submit">Add Record</button>
            </div>
            </form>

        )
};

export default AddRecord;