import { useContext } from "react";
import "./Cart.css";
import CartContext from "../Context/Cart/CartContext";
import CartItem from "./CartItem";


export default function Cart() {
    const { cartItems, showCart, showHideCart } = useContext(CartContext);

    const LANG = window.navigator.language;
    let currencyFormatter = require('currency-formatter');

    return (
        <>
            {showCart && (
                <div className="cart__back">
                    <div className='cart__wrapper'>
                        <div style={{ textAlign: "right" }}>
                            <i
                                style={{ cursor: "pointer" }}
                                className='fa fa-times-circle'
                                aria-hidden='true'
                                onClick={showHideCart}
                            ></i>
                        </div>
                        <div className='cart__innerWrapper'>
                            {cartItems.length === 0 ? (
                                <h4>Cart is Empty</h4>
                            ) : (
                                <ul>
                                    {cartItems.map((item) => (
                                        <CartItem key={item._id} item={item} />
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='cart__cartTotal'>
                            <div>Cart Total</div>
                            <div></div>
                            <div style={{ marginLeft: 5 }}>
                                {currencyFormatter.format(cartItems.reduce((amount, item) => item.price + amount, 0), { locale: LANG })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
