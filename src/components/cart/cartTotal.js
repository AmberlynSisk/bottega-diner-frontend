import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CartTotal() {
    const [cart, setCart] = useState([]);

    const renderCart = () => {
        axios.get('https://bottega-diner-backend.herokuapp.com/cart/get')
        .then(res => {
            setCart(res.data)
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request: ${error}`)
        })
    }


    const renderCartTotal = () => {
        let total = 0;
        cart.map(cartItem => {
            total += cartItem.price
            total = Math.floor(total * 100) / 100
        })
        return total;
    }
    

    useEffect(() => {
        renderCart();
    }, [])

    return (
        <div className="cart-total-wrapper">
            Your total is: ${renderCartTotal()}
        </div>
    )
}