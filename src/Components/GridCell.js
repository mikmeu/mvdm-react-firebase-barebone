import React from 'react';
import useWindowDimensions from '../functions';

function GridCell({ children, extraClass = "", dPos, tPos, mPos }) {
    let windowWidth = useWindowDimensions().width;
    let gridColumnStart = 1;
    let gridColumnEnd = 2;

    if (windowWidth > 719) {
        if (dPos) {
            gridColumnStart = dPos[0];
            gridColumnEnd = dPos[1] + 1;
        } else {
            return(<div className={"grid-cell " + extraClass}>
                {children}
            </div>)
        }
    }
    else if (windowWidth < 719 && windowWidth > 400) {
        if (tPos) {
            gridColumnStart = tPos[0];
            gridColumnEnd = tPos[1] + 1;
        } else {
            return(<div className={"grid-cell " + extraClass}>
                {children}
            </div>)
        }
    }
    else if (windowWidth < 400) {
        if (mPos) {
            gridColumnStart = mPos[0];
            gridColumnEnd = mPos[1] + 1;
        } else {
            return(<div className={"grid-cell " + extraClass}>
                {children}
            </div>)
        }
    }
    return (
        <div className={"grid-cell " + extraClass} style={{gridColumnStart:gridColumnStart, gridColumnEnd:gridColumnEnd}}>
            {children}
        </div>
    );
}

export default GridCell;