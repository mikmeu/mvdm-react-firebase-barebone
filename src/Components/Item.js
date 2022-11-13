import React from 'react';

function Item({ title, thumbnail = "", meta = "", children, ...otherProps }) {
    return (
        <div className="item" {...otherProps}>
            <div className="item-inner">
                <h2 className="item-title">{title}</h2>
                {thumbnail && <img src={thumbnail} className="item-thumbnail" alt={title} title={title} />}
                <div className="item-body">{children}</div>
                {meta && <div className="item-meta">{meta}</div>}
            </div>
        </div>
    );
}

export default Item;