const {BUY_BURGER} = require ('./burgerActionType');

let initialState = {
    burgerCount :75
};

//burger reducer

let burgerReducer = (state= initialState, action) => {
    switch(action.type) {
        case BUY_BURGER :
            return{
                ...state,
                burgerCount : state.burgerCount -1
            };
            default : return state;
    }
};

export {burgerReducer};