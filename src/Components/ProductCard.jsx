import React from 'react'

import './ProductCard.css';

import Rating from './Rating';

export default function ProductCard({ product }) {
    const LANG = window.navigator.language;
    let currencyFormatter = require('currency-formatter');

    return (
        <div className='productCard__wrapper'>
            <div>
                <img className="productCard__img" src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <div className='productCard__price'>
                    <h5>{currencyFormatter.format(product.price, { locale: LANG })}</h5>
                </div>
                <div className='productCard__Rating'>
                    <Rating
                        value={product.rating}
                        text={product.numReviews} />
                </div>
                <button className='productCard__button'>Add to basket</button>
            </div>
        </div>
    )
}
