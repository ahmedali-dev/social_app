import React from 'react';
import css from './Card.module.scss';
import love from './../icons/Heart.png'
import comment from './../icons/Message.png'

const Card = ({name, avatar, date, text, images, likes, comments, likesActive}) => {
    return (
        <div className={css.PostCard}>
            <div className={css.left}>

                {/*
                    ? avatar
                    ? name
                    ? data
                    ? option
                */}


                <div className={css.avatar}>
                    <div className={css.ava}></div>
                    <div className={`${css.name} ${css.nameMobile}`}>
                        <h3>person name</h3>
                        <p>3 hours ago</p>
                    </div>
                </div>

                <div className={`${css.option} ${css.optionMobile}`}>
                    <div className={css.toggle}>
                        <div className={css.t}></div>
                        <div className={css.t}></div>
                        <div className={css.t}></div>
                    </div>
                </div>


            </div>
            <div className={css.right}>

                <div className={`${css.cardtop} ${css.cardtopComputer}`}>
                    <div className={`${css.name}`}>
                        <h3>person name</h3>
                        <p>3 hours ago</p>
                    </div>


                    <div className={`${css.option}`}>
                        <div className={css.toggle}>
                            <div className={css.t}></div>
                            <div className={css.t}></div>
                            <div className={css.t}></div>
                        </div>
                    </div>
                </div>


                <div className={css.content}>
                    <div className={css.text}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley</p>
                    </div>

                    <div className={css.cardImage}>
                        <img
                            src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZG
                            l0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""/>
                    </div>

                    <div className={css.cardActiveInfo}>
                        <div className={css.loves}>
                            <img src={love} alt=""/>
                            <p>2K</p>
                        </div>
                        <div className={css.comments}>
                            <p>200 <span>comments</span></p>
                        </div>
                    </div>

                    <div className={css.cardActive}>
                        <button className={`${css.btnLove} `}>
                            <img src={love} alt=""/>
                            <p>Love</p>
                        </button>

                        <button className={css.btnComment}>
                            <img src={comment} alt=""/>
                            <p>Comment</p>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Card;