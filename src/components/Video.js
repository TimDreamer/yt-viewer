import React from "react";
import style from "../sass/components/_video.module.scss";

const Video = ({ video }) => {
  return (
    <div className={style.video}>
      <div className={style.video__title}>
        <p>{video.snippet.title}</p>
      </div>
      <button className={style.video__thumbnail}>
        <img src={video.snippet.thumbnails.medium.url} />
      </button>
    </div>
  );
};

export default Video;
