import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heading } from '../Components';

function Page({routes}) {
    return (
        <div>
            <Heading type="h1">Subpages</Heading>
            <Routes>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </div>
    );
}

export default Page;