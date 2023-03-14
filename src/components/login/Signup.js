import React from 'react';
import css from './login.module.css';
import {Link} from "react-router-dom";
import Login_image from "./../icons/Login_image.jpg";
import google from "./../icons/google.png";
import facebook from "./../icons/facebook.png";

const Signup = () => {
    return (
        <div className={css.login}>
            <div className={css.form_content}>
                <form>
                    <div className={css.form_content_header}>
                        <h1>Join in EG TOK</h1>
                    </div>
                    <div className={css.form_content_group}>
                        <label className={css.label} htmlFor="Name">Name:</label>
                        <input type="text" id={'Name'} placeholder={'Name'}/>
                        <div><span className={css.error}>error here</span></div>
                    </div>
                    <div className={css.form_content_group}>
                        <label className={css.label} htmlFor="Email">Email:</label>
                        <input type="Email" placeholder={'Email'} id={'Email'}/>
                        <div><span className={css.error}>error here</span></div>
                    </div>
                    <div className={css.form_content_group}>
                        <input type="submit" value="Next"/>
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
                    <h3>you have <Link className={css.moreO} to={'/login'}>Account?</Link></h3>
                </div>
            </div>
            <div className={css.login_image}>
                <img src={Login_image} alt="login image"/>
            </div>
        </div>
    );
};

export default Signup;