import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

})
const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware))


