import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Grid, GridCell, Heading, List } from '../../Components';
import Link from '../../Components/Link';
import { ADMIN_ITEMS } from '../../constants/admin-items';
function Admin({routes}) {
    return (<div>
                <Heading type="h1">Admin</Heading>
                <Grid type="six">
                    <GridCell><AdminNavigation /></GridCell>
                    <GridCell dPos={[2,6]}>
                    <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />
                        ))}
                    <Route path="/" element={<AdminIndex /> }/>
                    </Routes>
                    </GridCell>
                </Grid>
            </div>  
    );
}
function AdminIndex() {
    return(<div>Admin Index</div>);
}
function AdminNavigation() {
    let items = [];
    for (let i = 0; i < ADMIN_ITEMS.length; i++) {
        let item = ADMIN_ITEMS[i];
        items.push(<Link href={"/admin"+item.href} type="navLink" text={item.text} icon={item.icon} />)
    }
    return(<List className="admin-menu" items={items} />)
}
export default Admin;