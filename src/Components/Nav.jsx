import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext';

import './Nav.css';

export default function Nav() {
    const { cartItems, showHideCart, searchProduct } = useContext(CartContext);

    return (
        <nav>
            <div className='nav__left'>Store</div>
            <div className='nav__middle'>
                <div className="input__wrapper">
                    <input type="text" onChange={(e) => searchProduct(e.target.value)} />
                    <div></div>
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className='nav__right'>
                <div className="cart__icon">
                    <i className='fa fa-shopping-cart'
                        aria-hidden='true'
                        onClick={() => showHideCart()} />
                    {
                        cartItems.length > 0 && (
                            <div className='item__count'>
                                <span>{cartItems.length}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
