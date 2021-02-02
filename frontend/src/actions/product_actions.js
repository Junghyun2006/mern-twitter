import {headphoneReq} from "../util/rapid_api_utils"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const fetchProducts = (category) => dispatch => (
  headphoneReq(category)
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log(err)))


