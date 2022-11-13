import React from 'react';
import { useParams } from 'react-router-dom';


function Subpage(props) {
    let {page} = useParams();
    return (
        <div>
           Page: {page}
            
        </div>
    );
}

export default Subpage;