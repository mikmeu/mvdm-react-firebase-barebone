import React from 'react';
import Icon from './Icon';
function Message({ type, children }) {
    return (
        <div className={"message message-"+type}>
            <Icon name={type} color="#999" /> {children}
        </div>
    );
}

export default Message;