const SET_PRODUCTS = SET_PRODUCTS;
const SELECTED_PRODUCTS = SELECTED_PRODUCTS;


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