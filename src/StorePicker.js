import React from 'react';

const StorePicker = (props)=>{

    const myInput = React.createRef();//we've just created an empty 'ref' for the form that we can use to touch DOM

    const goToStore =(event)=>{//arrow function binds the methods much like using the constructor as seen at bottom
    event.preventDefault();//this method prevents the HTML form from submitting each time the submit button is pressed 
    const storeName = myInput.current.value;//can now access "this" instance, taking user input value

    props.history.push(`/store/${storeName}`);//push to the next page based on user input!
    //notice this path to push() above, this comes from looking at props on chrome dev tools
    }    
 
        return (
            <React.Fragment>
        <div className='genre-selector-div'>
            <form className="genre-selector" onSubmit={goToStore}> {/**method to visit store page */}
                <h2>Please enter a store location</h2>
                <input 
                type="text" 
                ref={myInput}//surfaces the input on the component so we can grab it
                required 
                placeholder='Enter a store name'  
                />
    
            <button className='btn btn-primary btn-block' type="submit">{`Visit Store->`}</button>
            </form>
            </div>
            </React.Fragment>
        )
    }


export default StorePicker;