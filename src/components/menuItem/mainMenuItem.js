import React from 'react';

export default function MainMenuItem(props) {
    const {id, title, price, description, img, type} = props.mainMenuItem;
    
    const handleAddToCart = () => {
        fetch('https://bottega-diner-backend.herokuapp.com/cart/add', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                title: title,
                price: price,
                img: img,
                type: type
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log('Error adding to cart', error);
        })
    }

        return (
            <div className="dishes" key={id}>
                <div className="container">
                    <img className="image" src={img} />
                    <div className="overlay">
                        <div className="text">
                            <h1 className="title">{title}</h1>
                            <p className="price"><br />${price}</p>
                            <p className="description"><br />{description}</p>
                            <button onClick={() => handleAddToCart()} className="add-to-cart-button">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
}