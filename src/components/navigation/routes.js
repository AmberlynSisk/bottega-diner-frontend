import React from 'react';
import Home from '../pages/home';
import Breakfast from '../pages/breakfast';
import Lunch from '../pages/lunch';
import Dinner from '../pages/dinner';
import Cart from '../pages/cart';

const routes = {
    '/': () => <Home />,
    '/breakfast': () => <Breakfast />,
    '/lunch': () => <Lunch />,
    '/dinner': () => <Dinner />,
    '/cart': () => <Cart />
}

export default routes;