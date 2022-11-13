import React from 'react';

function Grid({ num, children, ...otherProps }) {
    return (
        <div className={"grid grid-"+num} {...otherProps}>
            {children}
        </div>
    );
}

export default Grid;