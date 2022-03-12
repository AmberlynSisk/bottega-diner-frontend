import React from 'react';
import { A } from 'hookrouter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
    return (
        <div className="navigation-wrapper">
            <div className="logo-wrapper">
                <div className="bottega"><strong>BOTTEGA</strong></div>
                <div className="diner"><strong>DINER</strong></div>
            </div>
            <div className="left-side">
                <div className='nav-link'>
                    <A className='link' href='/'>
                        Home
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/breakfast'>
                        Breakfast Menu
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/lunch'>
                        Lunch Menu
                    </A>
                </div>
                <div className='nav-link'>
                    <A className='link' href='/dinner'>
                        Dinner Menu
                    </A>
                </div>
            </div>
            <div className="right-side">
                <div className='nav-link'>
                    <A className='link' href='/cart'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    </A>
                </div>
            </div>
        </div>
    )
}