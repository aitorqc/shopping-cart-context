import { useReducer } from 'react';

import CartContext from './CartContext';
import CartReducer from './CartReducer';

import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, SEARCH_TEXT } from '../Type';

const CartState = ({ children }) => {

    const initialState = {
        searchText: "",
        showCart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const searchProduct = (text) => {
        dispatch({type: SEARCH_TEXT, payload: text});
    }

    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });
    }

    const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART });
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id })
    }

    return (
        <CartContext.Provider
            value={{
                searchText: state.searchText,
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                showHideCart,
                removeItem,
                searchProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartState;