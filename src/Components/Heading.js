import React from 'react';

function Heading({ type, children, ...otherProps }) {
    switch (type) {
        case 'h1':
            return(<h1 {...otherProps}>{children}</h1>)
        case 'h2':
            return(<h2 {...otherProps}>{children}</h2>)
        case 'h3':
            return(<h3 {...otherProps}>{children}</h3>)
        case 'h4':
            return(<h4 {...otherProps}>{children}</h4>)
        case 'h5':
            return(<h5 {...otherProps}>{children}</h5>)
    }
    return (
        <div {...otherProps}>
            { children }
        </div>
    );
}

export default Heading;