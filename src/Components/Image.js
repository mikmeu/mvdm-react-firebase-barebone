import React from 'react';

function Image({ src, title, caption = "", ...otherProps}) {
    return (
        <div className="image-outer" {...otherProps}>
            <img src={src} title={title} alt={title} />
            {caption && <div className="caption">{caption}</div>}
        </div>
    );
}

export default Image;