import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { routes } from '../../Routes';

function Main() {
    return (
        <div>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />
          ))}
        </Routes>
        </div>
    );
}

export default Main;