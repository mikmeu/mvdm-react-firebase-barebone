import React from 'react';

function Footer({siteTitle}) {
    return (
        <footer className="footer">
            &copy; 2022 {siteTitle}
        </footer>
    );
}

export default Footer;