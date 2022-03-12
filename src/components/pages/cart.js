import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CartItem from '../cart/cartItem';
import OrderConfirmationModal from '../cart/orderConfirmation';

export default function Cart() {
    const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    
    const getAllCartItems = () => {
        axios.get('https://bottega-diner-backend.herokuapp.com/cart/get')
        .then(res => {
            setCart(res.data);
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request: ${error}`)
        })
    }

    const handleDeleteClick = (id) => {
        axios.delete(`https://bottega-diner-backend.herokuapp.com/cart/delete/${id}`)
        .then(res => {
            setCart(cart.filter(cartItem => {
                return cartItem.id != id;
            }));
        })
        .catch(error => {
            console.log('An error has occured while deleting your cart item.', error);
        })
    }

    const renderCartItems = () => {
        if(cart.length === 0) {
            return <h1 className="empty-cart">Uh Oh! Your cart is empty!</h1>
        } else {
            return cart.map(cartItem => {
                return <div key={cartItem.id}><CartItem cartItem={cartItem} handleDeleteClick={handleDeleteClick} /></div>
            })
        }
    }

    const handleSubmitOrder = () => {
        setConfirmationModalIsOpen(true);  
    }

    const handleModalClose = () => {
        setConfirmationModalIsOpen(false);
    }

    const handleCheckoutClick = () => {
        axios.delete('https://bottega-diner-backend.herokuapp.com/cart/delete')
        .then(() => {
            setCart([])
        })
        .catch(error => {
            console.log('An error has occured while deleting your cart item.', error);
        })

        setConfirmationModalIsOpen(false);
    }

    useEffect(() => {
        getAllCartItems();
    }, [])

    return (
        <div className="cart-container">
            <OrderConfirmationModal 
            confirmationModalIsOpen={confirmationModalIsOpen}
            handleModalClose={handleModalClose}
            handleCheckoutClick={handleCheckoutClick}
            />

            {renderCartItems()}
            
            {cart.length != 0 ? <button className="submit-order-btn" type="submit" onClick={handleSubmitOrder}>Submit Order</button> : null}
        </div>
    )
}