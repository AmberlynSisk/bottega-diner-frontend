import React from 'react';

export default function RandomMessage() {

    const generateRandomMessage = () => {
        let choices = [
            "Wow, what great choices!", 
            "Thank you for your order! Make sure you tell your friends about us!", 
            "Thanks for choosing Bottega Diner! We hope you love it!",
            "Yum! Let us know what you think of your food by leaving a review!", 
            "Sounds delicious!"
        ];

        let randomChoice = choices[Math.floor(Math.random()*choices.length)];
        return randomChoice; 
    }

    return (
        <div className="random-message">
            {generateRandomMessage()}
        </div>
    )
}