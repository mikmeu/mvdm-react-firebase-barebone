import React from 'react';

function ItemContainer({ num, children }) {
    return (
        <div className={"items-container grid grid-"+num}>
            {children}
        </div>
    );
}

export default ItemContainer;