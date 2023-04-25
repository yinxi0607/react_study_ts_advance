import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {List, Image} from 'antd';

interface List {
    [key: string]: any
}

function GoodList() {
    const location: {
        state: {
            name: string
        },
        search: string;
    } = useLocation()
    const search = location.search
    console.log("search", search)
    const [list, setList] = useState<List>([])
    useEffect(() => {
        console.log("useEffect")
        const searchParams = new URLSearchParams(search)
        const cid = searchParams.get('cid')
        console.log("cid", cid)
        fetch(`http://127.0.0.1:8080/api/list/hot?cid=${cid}`)
            .then(data => data.json())
            .then(res => {
                // console.log('res',res)

                setList(res.data.content)
            }).catch((error) => Promise.reject(error))
    }, [])
    console.log('list', list)
    const myArray: any[] = list as any[]
    return (
        <div>
            <h3>{location.state.name}</h3>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={myArray}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                    >
                        <Link
                            to={{
                                    pathname: '/detail',
                                    search: `?id=${item.id}&r=p/d`
                                }}
                        >
                        <List.Item.Meta
                            avatar={<Image width={100} src={item.avatar}/>}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default GoodList;