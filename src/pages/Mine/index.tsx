import React from 'react';
import {useNavigate} from "react-router-dom";

function Mine() {
    const navigate = useNavigate()
    return (
        <div>
            我得
            <button onClick={()=>navigate(-1)}>回去</button>
        </div>
    );
}

export default Mine;