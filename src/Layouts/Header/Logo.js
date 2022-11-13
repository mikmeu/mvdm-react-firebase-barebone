import React from 'react';
import { Heading, Image } from '../../Components';

function Logo({ siteLogo, siteTitle }) {
    return (
        <div className="logo-container">
        <div className="logo">
            <Image src={siteLogo} className="logo-image" title={siteTitle} />
        </div>
        <Heading type="h1" className="site-title">{siteTitle}</Heading>
    </div>
    );
}

export default Logo;