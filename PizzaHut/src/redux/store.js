import {combineReducers, createStore} from 'redux';
import {burgerReducer} from './burger/burgerReducer';
import {pizzaReducer} from './pizza/pizzaReducer';

let rootReducer = combineReducers({
    pizza : pizzaReducer,
    burger : burgerReducer
});

let store = createStore(rootReducer);
export {store};