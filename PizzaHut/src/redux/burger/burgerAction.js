import {BUY_BURGER} from './burgerActionType';

//buy burger

let buyBurger = () => {
    return{
        type : BUY_BURGER,
        payload : {
            info : 'Purchasing a burger'
        }
    }
};

export default buyBurger;