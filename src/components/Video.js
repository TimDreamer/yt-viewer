import React from "react";
import { changeSelected } from "../actions";
import { connect } from "react-redux";
import style from "../sass/components/_video.module.scss";

const Video = ({ video, index, page, video_per_page, changeSelected }) => {
  return (
    <div className={style.video}>
      <div className={style["video__thumbnail-box"]}>
        <button
          className={style.video__thumbnail}
          onClick={() => {
            changeSelected((page - 1) * video_per_page + index);
          }}
        >
          <img src={video.snippet.thumbnails.medium.url} />
        </button>
        <div className={style.video__title}>
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ misc: { page, video_per_page } }) => ({
  page,
  video_per_page,
});

export default connect(mapStateToProps, { changeSelected })(Video);
