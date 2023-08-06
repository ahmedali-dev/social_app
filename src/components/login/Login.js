import React from 'react';
import css from './login.module.css';
import {Link, Navigate} from "react-router-dom";
import Login_image from "./../icons/Login_image.jpg";
import google from "./../icons/google.png";
import facebook from "./../icons/facebook.png";

const Login = () => {


    if (sessionStorage.getItem('token')) {
        return <Navigate to={'/home'} replace/>
    }

    const LoginHanlder = (e) => {
        e.preventDefault();
        console.log("hello session");
        sessionStorage.setItem("token", "helloworld");
        window.location.reload();
    }

    return (
        <div className={css.login}>
            <div className={css.form_content}>
                <form onSubmit={LoginHanlder}>
                    <div className={css.form_content_header}>
                        <h1>Welcome back in <br/> EG TOK</h1>
                    </div>
                    <div className={css.form_content_group}>
                        <label className={css.label} htmlFor="Email">Email:</label>
                        <input type="email" id={'Email'} placeholder={'Email'}/>
                        <div><span className={css.error}>error here</span></div>
                    </div>
                    <div className={css.form_content_group}>
                        <label className={css.label} htmlFor="Password">Password:</label>
                        <input type="text" placeholder={'Password'} id={'Password'}/>
                        <div><span className={css.error}>error here</span></div>
                    </div>
                    <div className={css.form_content_group}>
                        <input type="submit" value="Login"/>
                    </div>

                    <div className={css.form_content_moreOption}>
                        <div className={css.line}></div>
                        <div className={css.loginOption}>
                            <div className={`${css.form_content_moreOption_item} ${css.face}`}>
                                <img src={facebook} alt=""/>
                                <p>facebook</p>
                            </div>
                            <div className={`${css.form_content_moreOption_item} ${css.google}`}>
                                <img src={google} alt=""/>
                                <p>google</p>
                            </div>
                        </div>
                    </div>
                </form>


                <div className={css.more}>
                    <h3>Create new <Link className={css.moreO} to={'/signup'}>Account</Link></h3>
                </div>
            </div>
            <div className={css.login_image}>
                <img src={Login_image} alt="login image"/>
            </div>
        </div>
    );
};

export default Login;