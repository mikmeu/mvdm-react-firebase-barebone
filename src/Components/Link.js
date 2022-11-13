import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import Image from './Image';

function Link({ type, href, image = "", icon = "", text = "", ...otherProps }) {
    let img = "";
    let ic = "";
    if (image) {
        img = <Image src={image} title="text" className="link-image" />
    }
    if (icon) {
        ic = <Icon name={icon} className="link-icon" />;
    }
    if (type == 'navLink') {
        return(<NavLink to={href} {...otherProps}>{ic} {img} {text}</NavLink>)
    } 
    return (<a href={href} {...otherProps}>{ic} {img} {text}</a>);
}

export default Link;