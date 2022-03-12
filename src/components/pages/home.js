import React from 'react';

import background from './images/main1.jpeg';

export default function Home() {
    return (
        <div className="home-wrapper">
            <div 
            className="bg-image"
            style={{ 
                backgroundImage: `url(${background})`, 
                filter: "blur(8px)",
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            ></div>

            <div className="bg-text">
                <p className="title">BREAKFAST.LUNCH.DINNER</p>
                <h1 className="welcome">Welcome to Bottega Diner</h1>
                <p className="order-now">ORDER ONLINE TODAY!</p>
            </div>
        </div>
    )
}