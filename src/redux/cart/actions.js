import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity = (payload) => ({
    type: CartActionTypes.INCREASE_QUANTITY,
    payload
}
)

export const decreaseProductQuantity = (payload) => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload
})