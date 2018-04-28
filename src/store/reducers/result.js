import * as actionTypes from '../actions/actionTypes';
import { deepCopyObjectFunction } from '../../deepCopyObjectFunction';

const initialState = {
    results: []
};

//reducer if not provided state the default state is taken ther from above


const reducer = ( state = initialState, action ) => {
    console.log("reaching reducers of result");
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return deepCopyObjectFunction(state,{results:state.results.concat({id: new Date(), value: action.result})})
            //above is doing same ting which below is doing
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(), value: action.result})
            //     //concat creates a deep copy of array
            // }
        case actionTypes.DELETE_RESULT:
            //1ST WAY
            // const id = 2;//creates shallow copy using push ,pop and etc;
            // const newArray = [...state.results];//CREATES deep copy using spread operator
            // newArray.splice(id, 1)//changing in deep copy so state not gets changed
            //2ND WAY
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId);//whoever element 
            // //its true return deep copy ofthe array using filter
            // return {//creating deep copy of the object
            //     ...state,
            //     results: updatedArray//results array is deep copied from the  above code
            // }
            //3RD WAY
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return deepCopyObjectFunction(state,{results:updatedArray})

    }
    return state;
};

export default reducer;