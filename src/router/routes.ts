// todo 路由表，用于渲染导航以及路由组件
import {lazy} from 'react'


interface Routes{
    path?: any,
    component: any,
    title?: string,
    children?: Routes[]
}


const routes: Routes[]= [
    {
        path: '/home/*',
        component: lazy(()=>import('../pages/Home')),
        title:"首页",
        children: [
            {
                path: 'hot',
                component: lazy(()=>import('../pages/Home/Hot')),
                title:"热销商品",
            },
            {
                path: 'classic',
                component: lazy(()=>import('../pages/Home/Classic')),
                title:"经典商品",
            }
        ]
    },
    // {
    //     path: '/home/*',
    //     component: lazy(()=>import('../pages/Home')),
    // },
    {
        path: '/about',
        component: lazy(()=>import('../pages/About')),
        title:"关于"
    },
    {
        path: '/about/*',
        component: lazy(()=>import('../pages/About')),
    },

    {
        path: '/admin',
        component: lazy(()=>import('../pages/Admin')),
        title:"管理"
    },
    {
        path: '/goodCate',
        component: lazy(()=>import('../pages/GoodCate')),
        title:"商品分类"
    },
    {
        path: '/mine',
        component: lazy(()=>import('../pages/Mine')),
        title:"我的信息"
    },
    {
        path: '/chart',
        component: lazy(()=>import('../pages/Chart')),
        title:"图标"
    },
    {
        path: '/list',
        component: lazy(()=>import('../pages/List')),
        title:"列表"
    },
    {
        path: '/detail',
        component: lazy(()=>import('../pages/Detail')),
        title:"详情"
    },
    {
        path: '/#',
        component: lazy(()=>import('../pages/NotFound')),
    }
]


export default routes