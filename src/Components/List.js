import React from 'react';

function List({ items, type, ...otherProps }) {
    if (type == 'ordered') {
        return(<ol className="ordered-list" {...otherProps}>
            {items.map((item,index) => {
                return(<li key={index}>{item}</li>)
            })}
        </ol>)
    }
    return(<ul className="unordered-list" {...otherProps}>
        {items.map((item,index) => {
            return(<li key={index}>{item}</li>)
        })}
    </ul>)
}

export default List;