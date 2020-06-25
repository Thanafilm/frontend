import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';
import dataReducer from './reducer/Datareducer';
import uiReducer from './reducer/UiReducer';

const initailState = {};
const middleware = [thunk];
const reducers = combineReducers({
    user : userReducer,
    data : dataReducer,
    UI : uiReducer
}) ;
const store = createStore(reducers,initailState,compose(applyMiddleware(...middleware) 
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store ;