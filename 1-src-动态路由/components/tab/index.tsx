import React from 'react';
import {NavLink} from 'react-router-dom'
import routes from '../../router/routes'
import './index.less'

function Tab() {
    return (
        <header>
            <ul className="tab_list">
                { routes.map(item => <li>
                    {/*NavLink是通过act iveClassName来控制激活样式*/}
                    <NavLink to={item.path}> {item.title} </NavLink>
                </li>) }
                <li>
                    <NavLink to="/hookList"> 钩子列表 </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Tab;