import React, {useEffect,useState} from 'react';
import {Tabs} from 'antd'
import {Link} from "react-router-dom";

function GoodCate() {
    const [list,setList] = useState<{[key:string]:any}>([])
    useEffect(()=> {
        fetch('http://127.0.0.1:8080/api/category')
            .then(data => data.json())
            .then(res => {
                console.log('res',res)
                setList((res.data.data))
            }).catch((error) => Promise.reject(error))
    },[])
    return (
        <div>
            商品分类
            <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                style={{ height: '100%'}}
                items={
                    list.map((item:any)=>{
                        return {
                            key: item.cid,
                            label: item.name,
                            children: <div>{
                                item.floors.map((floor:any,i:number) => <div key={i}>
                                    <h3>{floor.name}</h3>
                                    <ul style={{
                                        display:'flex',
                                        flexWrap:"wrap"
                                    }}>
                                        {
                                            floor.list.map((v: any) => <li key={v.api_cid} style={{
                                                marginLeft:10,
                                                marginTop:10
                                            }}>
                                                <Link to={{
                                                    pathname:"/list",
                                                    search: `?cid=${ v.api_cid }`
                                                }} state={{name:v.name}} style={{
                                                    display:"flex",
                                                    flexDirection:"column"
                                                }}>
                                                    <img src={ v.img} width="60" height="60"/>
                                                    <span>{v.name}</span>
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>)
                            }</div>
                        }
                    })
                }
            />
        </div>
    );
}

export default GoodCate;