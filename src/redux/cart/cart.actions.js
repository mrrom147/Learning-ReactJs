import { CartActionType } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const clearCartItem = item => ({
    type: CartActionType.CLEAR_CART_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
});