import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartItem(props) {
    const {id, title, price, img} = props.cartItem;

    return (
        <div className="cart-item" key={id}>
            <button className="delete-btn" type="button" onClick={() => props.handleDeleteClick(id)}>
                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
            <div className="cart-image-wrapper">
            <img className="image" src={img} />
            </div>

            <div className="cart-title-wrapper">
                {title}
            </div>

            <div className="cart-price">
                ${price}
            </div>
        </div>
    );
}