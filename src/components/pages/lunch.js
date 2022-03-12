import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainMenuItem from '../menuItem/mainMenuItem';
import SideMenuItem from '../menuItem/sideMenuItem';

export default function Lunch() {
    const [lunchItems, setLunchItems] = useState([]);

    const getAllMenuItems = () => {
        axios.get('https://bottega-diner-backend.herokuapp.com/menu-item/get')
        .then(res => {
            setLunchItems(res.data);
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request: ${error}`)
        })
    }

    const renderMainMenuItems = () => {
        return lunchItems.map(mainMenuItem => {
            if(mainMenuItem.type === 'main' && mainMenuItem.meal === 'lunch') {
                return <div key={mainMenuItem.id}><MainMenuItem mainMenuItem={mainMenuItem} /></div>
            }
        })
    }

    const renderSideMenuItems = () => {
        return lunchItems.map(sideMenuItem => {
            if(sideMenuItem.type === 'side' && sideMenuItem.meal === 'lunch') {
                return <div key={sideMenuItem.id}><SideMenuItem sideMenuItem={sideMenuItem} /></div>
            }
        })
    }

    useEffect(() => {
        getAllMenuItems();
    }, [])

        return (
            <div className="menu">
            <h2 className="main-title">For breakfast we offer these main dishes</h2>
            <div className="menu-item-wrapper">
                {renderMainMenuItems()}
            </div>

            <h2 className="side-title"><br />Breakfast Sides:</h2>
            <div className="menu-item-wrapper">
                {renderSideMenuItems()}
            </div>
        </div>
        );
}