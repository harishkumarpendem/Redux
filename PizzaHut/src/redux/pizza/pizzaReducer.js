const { BUY_PIZZA } = require("./pizzaActionTypes");

let initialState = {
    pizzaCount : 150
}

//pizza reducer

let pizzaReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_PIZZA :
            return {
                ...state,
                pizzaCount : state.pizzaCount -1
            };
            default : return state;
    }
};

export default pizzaReducer;