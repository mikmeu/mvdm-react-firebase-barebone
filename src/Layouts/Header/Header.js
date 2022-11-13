import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header({siteLogo, siteTitle}) {
    return (
        <header className="top-header">
            <Logo siteLogo={siteLogo} siteTitle={siteTitle} />
            <Navigation />
        </header>
    );
}

export default Header;