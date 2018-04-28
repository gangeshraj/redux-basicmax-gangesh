import * as actionTypes from '../actions/actionTypes';
import { deepCopyObjectFunction } from '../../deepCopyObjectFunction';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    console.log("reaching reducers ofCounter");
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return deepCopyObjectFunction(state,{counter:state.counter+1})
            //alternate syntax Above is the use of a outside function
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // }
        case actionTypes.DECREMENT:
            return deepCopyObjectFunction(state,{counter:state.counter-1})
            //alternate syntax Above is the use of a outside function
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionTypes.ADD:
            return deepCopyObjectFunction(state,{counter:state.counter+action.val})
            //alternate syntax Above is the use of a outside function
            // return {
            //     ...state,
            //     counter: state.counter + action.val
            // }
        case actionTypes.SUBTRACT:
            return deepCopyObjectFunction(state,{counter:state.counter-action.val})
            //alternate syntax Above is the use of a outside function
            // return {
            //     ...state,
            //     counter: state.counter - action.val
            // }
    }
    return state;
};

export default reducer;