
import {SET_PRODUCTS} from "../Actions/ActionType";
import {SELECTED_PRODUCTS} from "../Actions/ActionType"
const initData = {
    products:[]
    
};

export const productReducer = (state = initData, { type, payload=[] }) => {
    switch (type) {
        case SET_PRODUCTS:

            return { ...state, products:[...payload] }

        default:
            return state;
    }
}



export const selectProuctReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCTS:

            return { ...state, ...payload };

        default:
            return state;
    }
}