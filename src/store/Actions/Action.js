import { SET_PRODUCTS , SELECTED_PRODUCTS } from "./ActionType";


export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
};
export const selectedProducts = (productsData) => {
    return {
        type: SELECTED_PRODUCTS,
        payload: productsData,
    };
};