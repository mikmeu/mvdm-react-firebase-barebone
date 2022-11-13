import React from 'react';

function Codeblock({ children, ...otherProps }) {
    return (
        <code className="code-block" {...otherProps}>
            {children}
        </code>
    );
}

export default Codeblock;