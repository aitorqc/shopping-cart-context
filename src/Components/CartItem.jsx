import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../Context/Cart/CartContext";

export default function CartItem({item}) {
    const { removeItem } = useContext(CartContext);

    const LANG = window.navigator.language;
    let currencyFormatter = require('currency-formatter');

    return (
        <li className='cartItem__item'>
            <img src={item.image} alt='' />
            <div>
                {item.name} {currencyFormatter.format(item.price, { locale: LANG })}
            </div>
            <button className='cartItem__button' onClick={() => removeItem(item._id)}>
                Remove
            </button>
        </li>
    );
}
