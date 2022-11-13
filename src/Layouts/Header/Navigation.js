import React from 'react';
import { List } from '../../Components';
import Link from '../../Components/Link';
import { DESKTOP_ITEMS } from '../../constants/desktop-items';
import { MOBILE_ITEMS } from '../../constants/mobile-items';
function Navigation(props) {
    let dItems = [];
    for (let i = 0; i < DESKTOP_ITEMS.length; i++) {
        let item = DESKTOP_ITEMS[i];
        dItems.push(<Link href={item.href} type="navLink" text={item.text} icon={item.icon} />)
    }
    let mItems = [];
    for (let i = 0; i < MOBILE_ITEMS.length; i++) {
        let item = MOBILE_ITEMS[i];
        mItems.push(<Link href={item.href} type="navLink" text={item.text} icon={item.icon} />)
    }
    return (
        <div className="nav-container">
            <nav className="nav">
                <List className="nav-list mobile-hide" items={dItems} />
                <List className="nav-list mobile-view" items={mItems} />
            </nav>
        </div>
    );
}

export default Navigation;