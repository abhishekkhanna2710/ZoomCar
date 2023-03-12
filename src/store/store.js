import {legacy_createStore as createStore} from "redux";
import {productReducer} from "./reducers/productReducer"


export const store = createStore(
    productReducer
)




