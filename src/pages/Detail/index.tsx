import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";


function Detail() {
    const {search} = useLocation()
    const [dataInfo,setDataInfo] = useState("")
    useEffect(()=>{

        }

    )
    return (
        <div>
            xml类型数据如何解析<hr/>
            react : dangerouslySetInnerHTML 属性<hr/>
            <div>

            </div>
        </div>
    );
}

export default Detail;