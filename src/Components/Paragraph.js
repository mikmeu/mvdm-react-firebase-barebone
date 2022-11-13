import React from 'react';

function Paragraph({ children, ...otherProps}) {
    return (
        <p {...otherProps}>
            {children}
        </p>
    );
}

export default Paragraph;