import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
                //concat makes a new array and add the elementunline push pop which makes shallow copy
            }
        case actionTypes.DELETE_RESULT:
            // const newArray = [...state.results];//deep copy and than splice so not 
            //to make original state changed
            // newArray.splice(action.resultElId, 1)//splice makes shallow copy therefore 
            //above we spread it
            //below is alternate of above
            //filter makes deep copy of arrayfor element it returns true like [...arrayname]
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;