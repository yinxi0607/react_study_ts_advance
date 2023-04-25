import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

function About() {
    const history = useNavigate();
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        history('/mine')
    }
    return (
        <div>
            关于我们
            需求：有几种方式可以跳转到 我的信息<hr/>
            1、生命是跳转<hr/>
            <Link to="/mine">去我得信息Link</Link><br/>
            <NavLink to="/mine">去我得信息NavLink</NavLink><br/>
            <a href="/mine">去我得信息【a--a标签跳转会刷新】</a><br/><hr/>

            2、命令式跳转【编程式跳转】
            <button onClick={handleSubmit}>
                点击
            </button><br/>
        </div>
    );
}

export default About;