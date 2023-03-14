import React from 'react';
import css from './login.module.css';
import {Link} from "react-router-dom";
import Login_image from "./../icons/Login_image.jpg";

const VerifyAccount = () => {
    return (
        <div className={css.login}>
            <div className={css.form_content}>
                <form>
                    <div className={css.form_content_header}>
                        <h1>Verify Account</h1>
                    </div>
                    <div className={css.form_content_group}>
                        <label className={css.label} htmlFor="Code">Code:</label>
                        <input type="text" id={'Code'} placeholder={'Code'}/>
                        <div><span className={css.error}>error here</span></div>
                    </div>
                    <div className={css.form_content_group}>
                        <input type="submit" value="Next"/>
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

export default VerifyAccount;