import React, { useContext } from 'react'

import './HomeScreen.css';

import ProductCard from '../Components/ProductCard';
import CartContext from '../Context/Cart/CartContext';

import products from '../data'

export default function HomeScreen() {
    const { searchText } = useContext(CartContext);

    const filteredData = products.filter((data) => {
        //if no input the return the original
        if (searchText === '') {
            return data;
        }
        //return the item which contains the user input
        else {
            return data.name.toLowerCase().includes(searchText)
        }
    })
    return (
        <div className='products__wrapper'>
            {
                filteredData.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
        </div>
    )
}
