import * as actionTypes from './actionsTypes';

//below is action creator 
export const storeResultNext=(res)=>{
    return {
        type:actionTypes.STORE_RESULT,
        result:res
    }
}

export const storeResult=(res)=>{//payload passed in
    //it is the middle ware applied to have asynchronous code running and returning
    //a function instead of javascript object this is due to reduxThunk
    //else by javascript default the running of code isSychronous
    //get agumenets dispatch and getState due to redux-thunk
        console.log("outside dispatch os store result",res);
        return dispatch=>{//have dispatch as argument
            console.log("inside dispatch os store result",res);
            setTimeout(()=>{
                dispatch(storeResultNext(res));
            },2000)
        }
}


//below is action creator
export const deleteResultNext=(id)=>{
    return {
        type:actionTypes.DELETE_RESULT,
        resultElId: id
    }
}

export const deleteResult=(id)=>{//payload passed in
    //it is the middle ware applied to have asynchronous code running and returning
    //a function instead of javascript object this is due to reduxThunk
    //else by javascript default the running of code isSychronous
    //get agumenets dispatch and getState due to redux-thunk
    return (dispatch,getState)=>{//have dispatch as argument
        setTimeout(()=>{
            console.log("ok",getState().counter);
            dispatch(storeResultNext(id));
        },8000)
    }
}