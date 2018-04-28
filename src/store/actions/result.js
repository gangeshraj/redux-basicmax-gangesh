import * as actionTypes from './actionTypes';

//action creators
export const storeResultNext = ( res ) => {
    console.log("middlewarebythunk storeresultNext");
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

//midle ware calling action creators
export const storeResult = ( res ) => {//middle ware provided  byredux thunk
    //it returns a function which gets two argument first is dispatch
    //the next action and 2nd is a function getting current state
    console.log("middlewarebythunk storeresult");
    return (dispatch,getState) => {
        setTimeout( () => {
            const counter=getState().ctr.counter;//can get state of central store
            console.log("store");
            dispatch(storeResultNext(res));
        }, 2000 );
    }
};

export const deleteResultNext = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};

export const deleteResult = ( resElId ) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(deleteResultNext(resElId));
        }, 2000 );
    }
};