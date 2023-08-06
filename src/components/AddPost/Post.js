import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import css from "./Post.module.scss";
import image from "./../icons/image.png";
import video from "./../icons/video.png";

const MyComponent = () => {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("auto");
  const [lengthT, setLengthT] = useState(0);
  const ref = useRef(null);

  const isLogin = sessionStorage.getItem("token");

  if (!isLogin) {
    return <Navigate to={"/login"} replace />;
  }

  const handleChange = (event) => {
    const len = event.target.value.length;
    const val = event.target.value;
    const hei = ref.current.scrollHeight;

    // console.log(hei);

    if (lengthT < 2000) {
      setValue(val);
      setLengthT(len);
      setHeight(hei + "px");
    }

    console.log(event.target.scrollWidth);
    if (len < lengthT) {
      setValue(val);
      setLengthT(len);
      setHeight("auto");
      setTimeout(() => {
        const hei = ref.current.scrollHeight;
        console.log(hei);
        setHeight(hei + "px");
        ref.current.animate(
          {
            height: `${hei}px`,
          },
          { duration: 2000 }
        );
      }, 100);
    }
  };

  const handleKeyUp = (event) => {
    // const
    // const date = new Date();
    // console.log(Date.now());
    // setTimeout(() => {
    //
    //     console.log(event.target.value);
    //     if (lengthT == value.length) {
    //         return;
    //     }
    //
    //
    //     setHeight('auto');
    //     setTimeout(() => {
    //         const hei = ref.current.scrollHeight;
    //         console.log(hei);
    //         setHeight(hei + 'px');
    //     }, 100);
    // }, 2000)
  };

  return (
    <div className={`${css.addpost} ${css.container}`}>
      <form method={"post"}>
        {/*content text*/}
        <div className={css.text}>
          <label htmlFor="post">Post</label>
          <textarea
            value={value}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            style={{ height }}
            ref={ref}
            placeholder={"What's Happening?"}
            name="post"
            id={css.post}
            cols="30"
            rows="10"
          ></textarea>
          <p className={css.length}>
            {lengthT}/ <span>2000</span>
          </p>
        </div>
        {/*content image*/}
        <div className={css.alert}>
          <h1>this future is not work now</h1>
        </div>
        <div className={css.content_row}>
          <div className={css.content_imvi}>
            <label htmlFor="image">
              <img src={image} alt="choose image" />
              <p>Image</p>
            </label>

            <input type="file" name={"image"} id={"image"} accept={"image/*"} hidden />
          </div>
          {/*content video*/}
          <div className={css.content_imvi}>
            <label htmlFor="video">
              <img src={video} alt="choose video" />
              <p>Video</p>
            </label>

            <input type="file" name={"video"} id={"video"} accept={"video/*"} hidden />
          </div>
        </div>

        {/*    share button*/}
        <div className={css.sharebtn}>
          {value !== "" ? (
            <button className={css.btn} type="submit">
              Share
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default MyComponent;
