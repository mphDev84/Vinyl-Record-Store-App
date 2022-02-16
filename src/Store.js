import { createStore }from "redux";

const data ={};

function reducer(state=data, action){
    return state;
}

export const Store =createStore(reducer);
export default reducer;

