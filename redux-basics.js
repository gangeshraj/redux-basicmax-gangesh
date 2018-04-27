const redux=require('redux');//sytax of node neeeding redux package
const createStore=redux.createStore;//create store hat conatins all states

const initialState={//a javascript object
    counter:0
}

//reducer with default value if nothing is passed state is
//initialised to initial action javascript object
//reducer is just a fnormal javascript unction
const rootReducer=(state=initialState,action)=>{
    if(action.type==="INC_COUNTER"){
        return {//changing state immutabily
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==="ADD_COUNTER"){
        return {//changing state immutabily
            ...state,//spread state for deep copy
            counter:state.counter+action.value//new key counter with initial counter value and 
            //action.value a numerical value
        }
    }

    return state;
}

//store to have reducer passed as argument
const store=createStore(rootReducer);
console.log(store.getState());//tells what the current status is


//subscription
store.subscribe(()=>{
    //notify whenever state is changed or any dispatching action takes place
    console.log('[subscription]',store.getState());
})

//dispatching action where type is mandatory key name it caNT BE CHANGED
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:5});//type of action with payload
console.log(store.getState());

