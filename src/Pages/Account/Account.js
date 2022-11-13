import { signOut } from 'firebase/auth';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Button, Grid, GridCell, Heading, Paragraph } from '../../Components';
import Link from '../../Components/Link';
import { auth } from '../../services/FirebaseFunctions';

function Account({routes}) {
    const user = auth.currentUser;
    return (
        <div>
            <Heading type="h1">Account</Heading>
            <Grid num="three">
                <GridCell>
                    <Paragraph>Name: {user.displayName} <Link type="navLink" href="/account/change-profile" text="(change)" /> <br/>E-mail: {user.email} <Link type="navLink" href="/account/change-email" text="(change)" /><br/><Link type="navLink" href="/account/change-password" text="Change password"/></Paragraph>
                    <Button type="button" onClick={()=> signOut(auth)}>Sign out</Button>
                </GridCell>
                <GridCell dPos={[2,3]}>
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
                </GridCell>
            </Grid>
            
           
        </div>
    );
}

export default Account;