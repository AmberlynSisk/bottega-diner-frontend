import React from 'react';
import { useRoutes } from 'hookrouter';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping, faCirclePlus, faTrashCan);

import NavBar from './navigation/navBar';
import routes from './navigation/routes';

export default function App() {
  const routeResults = useRoutes(routes);

    return (
      <div className='app'>
        <NavBar />
        {routeResults}
      </div>
    );
}
