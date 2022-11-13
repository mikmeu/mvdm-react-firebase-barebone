import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { ProtectedRoute } from '../../Pages/Security';
import AdminRoute from '../../Pages/Security/AdminRoute';
import { adminRoutes, privateRoutes, routes } from '../../Routes';

function Main() {
    return (
        <div>
          
        <Routes>
        {adminRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={<AdminRoute><route.component routes={route.routes} /></AdminRoute>} />
        ))}
        {privateRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={<ProtectedRoute><route.component routes={route.routes} /></ProtectedRoute>} />
        ))}
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />
        ))}
        </Routes>
        </div>
    );
}

export default Main;