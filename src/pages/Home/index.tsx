// import React, {Suspense} from 'react';
// import {NavLink, Route, Routes, useLocation} from "react-router-dom";
// import routes from "../../router/routes";
//
// interface P {
// }
//
// function Home(props: P) {
//     // const children = routes.filter(item=>)
//     const location = useLocation()
//     console.log(location.pathname)
//
//     const children = routes.filter(item => item.path.indexOf(location.pathname) !== -1)[0]
//     // console.log('routes',routes)
//     console.log('children',children)
//     return (
//         <div>
//             {/*首页*/}
//             {/*子路由的导航区域*/}
//             {/*<Suspense fallback={<div>组件切换中....</div>}>*/}
//             {/*    <Routes>*/}
//
//             {/*        {*/}
//             {/*            children.children && children.children.map((item,index) => (*/}
//             {/*                    <Route key={index} path={item.path} Component={item.component}/>*/}
//             {/*                )*/}
//             {/*            )*/}
//             {/*        }*/}
//
//             {/*    </Routes>*/}
//             {/*</Suspense>*/}
//             <ul className="tab_list">
//                 {children && children.children && children.children.map(item => <li>
//                     {/*NavLink是通过act iveClassName来控制激活样式*/}
//                     <NavLink to={item.path}> {item.title} </NavLink>
//                 </li>)}
//             </ul>
//
//             {/*子路由组件渲染区域*/}
//             <div>
//                 <Suspense fallback={<div>组件切换中....</div>}>
//                     <Routes>
//                         {
//                             children &&children.children && children.children.map(item => <Route path={item.path}
//                                                                                        >
//                             </Route>)
//                         }
//                     </Routes>
//                 </Suspense>
//             </div>
//         </div>
//     );
// }
//
// export default Home;



import React, {Suspense} from 'react';
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import routes from "../../router/routes";

interface P {
}

function Home(props: P) {
    // const children = routes.filter(item=>)
    const location = useLocation()
    console.log(location.pathname)

    const children = routes.filter(item => item.path.indexOf(location.pathname) !== -1)[0]
    // console.log('routes',routes)
    console.log('children',children)
    return (
        <div>
            {/*首页*/}
            {/*子路由的导航区域*/}
            {/*<Suspense fallback={<div>组件切换中....</div>}>*/}
            {/*    <Routes>*/}

            {/*        {*/}
            {/*            children.children && children.children.map((item,index) => (*/}
            {/*                    <Route key={index} path={item.path} Component={item.component}/>*/}
            {/*                )*/}
            {/*            )*/}
            {/*        }*/}

            {/*    </Routes>*/}
            {/*</Suspense>*/}
            <ul className="tab_list">
                {children && children.children && children.children.map(item => <li>
                    {/*NavLink是通过act iveClassName来控制激活样式*/}
                    <NavLink to={item.path}> {item.title} </NavLink>
                </li>)}
            </ul>

            {/*子路由组件渲染区域*/}
            <div>
                <Suspense fallback={<div>组件切换中....</div>}>
                    <Routes>
                        {
                            children &&children.children && children.children.map(item => <Route path={item.path}
                            >
                            </Route>)
                        }
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default Home;