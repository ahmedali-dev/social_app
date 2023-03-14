import {Link, NavLink} from "react-router-dom";
import css from './Header.module.css';
import home from './../icons/Home.png';
import search from './../icons/Search.png'
import addpost from './../icons/Plus.png'
import notifi from './../icons/Notification.png'
import profile from './../icons/Profile.png'
import {useRef, useState} from "react";

const Header = props => {


    const [showNotification, setShowNotification] = useState(false);
    const [showsearch, setShowSearch] = useState(false);
    const notificationRef = useRef(null);
    // const [notifi_tran, setnotifi_tran] = useState();
    // window.addEventListener('resize', () => {
    //     // console.log(window.innerWidth, " => ", notificationRef.current.getBoundingClientRect().x)
    //     if (window.innerWidth > 768) {
    //         setnotifi_tran(notificationRef.current.getBoundingClientRect().x - 100)
    //     } else {
    //         setnotifi_tran(null);
    //     }
    // })

    const ShowNotification = () => {
        setShowNotification((prev) => {
            return !prev;
        })
    }

    const ShowSearch = () => {
        setShowSearch(!showsearch);
    }

    const notification = [
        {
            name: 'ahmedali',
            avatar: 'https://images.unsplash.com/photo-1676824446561-9f1a12fa1ce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: false
        },
        {
            name: 'coderx',
            avatar: 'https://images.unsplash.com/photo-1677193114487-e3200897f18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: true
        },
        {
            name: 'ahmedali',
            avatar: 'https://images.unsplash.com/photo-1676824446561-9f1a12fa1ce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: false
        },
        {
            name: 'coderx',
            avatar: 'https://images.unsplash.com/photo-1677193114487-e3200897f18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: true
        }, {
            name: 'ahmedali',
            avatar: 'https://images.unsplash.com/photo-1676824446561-9f1a12fa1ce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: false
        },
        {
            name: 'coderx',
            avatar: 'https://images.unsplash.com/photo-1677193114487-e3200897f18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: true
        },

        {
            name: 'uixi design',
            avatar: 'https://images.unsplash.com/photo-1677492750297-bf465600cb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: false
        },
        {
            name: 'musics',
            avatar: 'https://images.unsplash.com/photo-1643032460110-102d90fe1e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: false
        },
        {
            name: 'zaloiza',
            avatar: 'https://images.unsplash.com/photo-1678355964547-d23bde056f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: true
        },
        {
            name: 'abolo',
            avatar: 'https://images.unsplash.com/photo-1678308860535-210ff0f57af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            timeuplode: Date.now(),
            visited: true
        }


    ];
    return (
        <>
            <nav className={css.nav}>
                <div className={css.left}>
                    <div className={css.logo}></div>
                </div>
                <div className={css.right}>
                    <div className={css.list}>
                        <div className={css.item}>
                            <NavLink to={'/home'}
                                     className={({isActive}) => {
                                         return isActive ? css.active : ''
                                     }}>
                                <img className={css.item_img} src={home} alt=""/>
                                <p>Home</p>
                            </NavLink>
                        </div>

                        <div onClick={ShowSearch} className={css.item}>
                            <NavLink to={'/search'}
                                     className={({isActive}) => {
                                         return isActive ? `${css.active} notvisible ` : `notvisible`
                                     }}>
                                <img className={css.item_img} src={search} alt=""/>
                                <p>Search</p>
                            </NavLink>
                        </div>

                        <div className={css.item}>
                            <NavLink to={'/addpost'}
                                     className={({isActive}) => {
                                         return isActive ? css.active : ''
                                     }}>
                                <img className={css.item_img} src={addpost} alt=""/>
                                <p>New Post</p>
                            </NavLink>


                        </div>
                        {/* ${css["drop-menu"]}*/}
                        <div
                            onClick={ShowNotification}
                            ref={notificationRef} className={`${css.item}`}>
                            <NavLink c to={'/notification'}
                                     className={({isActive}) => {
                                         return isActive ? `${css.active} notvisible ` : `notvisible`
                                     }}>
                                <img className={css.item_img} src={notifi} alt=""/>

                            </NavLink>


                        </div>

                        <div className={`${css.item}} ${css.notActiveComputer}`}>
                            <img className={css.item_img} src={profile} alt=""/>
                        </div>


                    </div>

                    <div className={css.nav_account}>
                        <div className={css.nav_account_image}>
                            <img className={css.item_img} src={profile} alt=""/>
                        </div>
                    </div>
                </div>

            </nav>

            {/*    style={{*/}
            {/*    left: notifi_tran ? `${notifi_tran}px` : ''*/}
            {/*}}*/}

            {showNotification ? <div className={css.navigation_opened}>
                <div className={css.closeNavi}>
                    <h1
                        onClick={ShowNotification}
                    >X</h1>
                    <h3>Close Notification</h3>
                </div>
                {notification.map(n =>
                    <Link className={css.notifi_link} to={'/post/id'}>
                        <div className={css.notifi_item}>
                            <div className={css.item_image}>
                                {!n.visited ? <div className={css.clicked_notifi}></div> : ''}
                                <img src={n.avatar} alt=""/>
                                <div className={css.content}>
                                    <h3>{n.name} add new post</h3>
                                    <p className={css.timeuplode}>
                                        <>{n.timeuplode}</>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div> : ""}


            {showsearch ? <div
                className={`${css.navigation_opened} ${css.searchNavi}`}>
                <div className={css.search}>
                    <form action="" method={'post'}>
                        <div className={css.inputSearch}>
                            <div
                                onClick={ShowSearch}
                                className={`${css.closeSearch}`}>x
                            </div>
                            <input type="text" placeholder={'search'} name={'search'}/>
                            <div className={css.searchicon}>
                                <img src={search} alt=""/>
                            </div>
                        </div>
                    </form>
                </div>
                {notification.map(n =>
                    <Link className={css.search_link} to={'/post/id'}>
                        <div className={css.search_item}>
                            <div className={css.item_image}>
                                <div className={css.removeAccountfromsearch}>X</div>
                                <img src={n.avatar} alt=""/>
                                <div className={css.content}>
                                    <h3>{n.name} add new post</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div
            > : ''}
        </>
    );
};


export default Header;