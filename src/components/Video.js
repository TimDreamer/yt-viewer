import React from "react";
import { changeSelected } from "../actions";
import { connect } from "react-redux";
import style from "../sass/components/_video.module.scss";

const Video = ({ video, changeSelected }) => {
  return (
    <div className={style.video}>
      <div
        className={style["video__thumbnail-box"]}
        onClick={(e) => {
          if (
            e.target.closest("[class^='_video_video__thumbnail']") ||
            e.target.closest("[class^='_video_video__title']")
          ) {
            changeSelected(video);
          }
        }}
      >
        <button className={style.video__thumbnail}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
        </button>
        <div className={style.video__title}>
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { changeSelected })(Video);
