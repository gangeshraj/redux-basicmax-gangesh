export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


//below is action creator
export const increment=()=>{
    return {
        type:INCREMENT
    }
}

//below is action creator
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}

//below is action creator
export const add=(value)=>{
    return {
        type:ADD,
        val:value
    }
}

//below is action creator
export const subtract=(value)=>{
    return {
        type:INCREMENT,
        val:value
    }
}

//below is action creator
export const storeResult=(res)=>{
    return {
        type:INCREMENT,
        result:res
    }
}

//below is action creator
export const deleteResult=(id)=>{
    return {
        type:INCREMENT,
        resultElId: id
    }
}