import {BUY_PIZZA} from './pizzaActionTypes';

//buy pizza

let buyPizza = () => {
    return{
        type : BUY_PIZZA,
        payload : {
            info : 'Purchasing a pizza'
        }
    }
};

export default buyPizza;