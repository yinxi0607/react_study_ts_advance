// import React, {Suspense } from 'react'; //Suspense 和lazy是一起搭配使用，Suspense转场组件
// import routes from './routes'
// import {Navigate, Route, Routes} from 'react-router-dom'
// // Route 就是用于渲染组件的，类似于vue router-view
// // Route组件身上有一些属性
// /*
// *  path 路由路径
// *  component 路由要渲染的钻进
// * */
//
// function RouterComp() {
//     return (
//         <div>
//             <Suspense fallback={<div>组件切换中....</div>}>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/home" />} />
//                     {
//                         routes.map((item,index) => (
//                                 <Route key={index} path={item.path} Component={item.component}/>
//                             )
//                         )
//                     }
//                 </Routes>
//
//             </Suspense>
//         </div>
//     );
// }
//
// export default RouterComp;


import React, {Suspense } from 'react'; //Suspense 和lazy是一起搭配使用，Suspense转场组件
import routes from './routes'
import {Navigate, Route, Routes} from 'react-router-dom'
// Route 就是用于渲染组件的，类似于vue router-view
// Route组件身上有一些属性
/*
*  path 路由路径
*  component 路由要渲染的钻进
* */

function RouterComp() {
    return (
        <div>
            <Suspense fallback={<div>组件切换中....</div>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    {
                        routes.map((item,index) => (
                                <Route key={index} path={item.path} Component={item.component}/>
                            )
                        )
                    }
                </Routes>

            </Suspense>
        </div>
    );
}

export default RouterComp;