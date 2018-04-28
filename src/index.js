import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//it injects the central redux store in react
import { 
    createStore, //helps to create central redux store
    combineReducers, //helps to combine multiple reducers after it 
    //any state which uses state must use this.props.ctr or this.props.res
    applyMiddleware, //this applies midle ware between reducer and central store to make changes 
    compose } from 'redux';//it used as a compose of redux if redux dev tools not installed
    //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  not exists
import thunk from 'redux-thunk';//the middle ware which helps us use async action 

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({//combine multile reducers in one and pass that reducer in store
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {//custom middle ware developed by me
    return next => {//returns a new function for continuing action
        //it again returns a function which has actiion as argument
        console.log("next",next);
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);//returning again this function with action as 
            //argument we got to return action as argument
            console.log('[Middleware] next state', store.getState());
            console.log("result is,",result)
            return result;
        }
    }
};


///it used as a compose of redux if redux dev tools not installed
//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  not exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//passing reducers to store //to have redux dev tools get state 
//logger is custom middlw ware and thunk is middle ware provided by redux-thun to use async ation in action-creators
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

//injecting store in app using react-redux providers
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
