import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ type, extraClass = "", children, ...otherProps }) {
    return (
        <div className={"btn-outer " + extraClass}>
            {type == 'a' && <a className="btn" {...otherProps}>{children}</a>}
            {type == 'button' && <button className="btn" {...otherProps}>{children}</button>}
            {type == 'navLink' && <NavLink className="btn" {...otherProps}>{children}</NavLink>}
        </div>
    );
}

export default Button;