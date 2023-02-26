import React from 'react'

import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <div className='nav__left'>Store</div>
            <div className='nav__middle'>
                <div className="input__wrapper">
                    <input type="text" />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className='nav__right'>
                <div className="cart__icon">
                    <i className='fa fa-shopping-cart'
                        aria-hidden='true'></i>
                </div>
            </div>
        </nav>
    )
}
