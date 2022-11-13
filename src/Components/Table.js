import React from 'react';

function Table({ heading, rows, ...otherProps }) {
    return (
        <table className="table" {...otherProps}>
            <thead>
                <tr>
                {heading.map((head, index) => {
                    return(<th key={index}>{head}</th>)
                })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return(<tr key={index}>
                        {row.map((col, ix) => {
                            return(<td key={ix}>{col}</td>)
                        } )}
                    </tr>)
                })}
            </tbody>
        </table>
    );
}

export default Table;