

import * as actionTypes from './actionsTypes';



//below is action creator
export const increment=()=>{
    console.log("reaching in increment");
    return {
        type:actionTypes.INCREMENT
    }
}

//below is action creator
export const decrement=()=>{
    return {
        type:actionTypes.DECREMENT
    }
}

//below is action creator
export const add=(value)=>{
    return {
        type:actionTypes.ADD,
        val:value
    }
}

//below is action creator
export const subtract=(value)=>{
    return {
        type:actionTypes.SUBTRACT,
        val:value
    }
}