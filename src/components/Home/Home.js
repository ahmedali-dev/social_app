import React, {Fragment} from 'react';
import {Navigate} from 'react-router-dom';
import css from './Home.module.scss';
import Card from "../PostCard/Card";


const Home = (props) => {

    const isLogin = sessionStorage.getItem('token');

    if (!isLogin) {
        return <Navigate to={'/login'} replace/>
    }
    return (
        <Fragment>
            <div className={css.posts}>
                <div className={css.row}>
                    <Card name={'this is name'}/>
                    <Card name={'this is name'}/>
                    <Card name={'this is name'}/>
                    <Card name={'this is name'}/>
                    <Card name={'this is name'}/>
                    <Card name={'this is name'}/>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;
