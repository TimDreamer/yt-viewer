import React from "react";
import BaseView from "./BaseView";
import { connect } from "react-redux";
import { ReactComponent as HeartSvg } from "../imgs/SVG/heart.svg";
import style from "../sass/components/_mainVideo.module.scss";

class MainVideo extends BaseView {
  render() {
    const { video } = this.props;
    const videoSrc =
      video && `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return video ? (
      <div className={style["main"]}>
        <div className={style["video-box"]}>
          <iframe
            className={style["video-box__video"]}
            title={video.snippet.title}
            src={videoSrc}
          ></iframe>
        </div>
        <div className={style["video-details"]}>
          <h1 className={style["video-details__title"]}>
            {video.snippet.title}
          </h1>
          <p className={style["video-details__description"]}>
            {video.snippet.description}
          </p>
          <button className={style.favorite}>
            <HeartSvg className={style.favorite__icon} />
          </button>
        </div>
      </div>
    ) : (
      this.renderLoading()
    );
  }
}

const mapStateToProps = ({ videos: { searchVideos }, misc: { selected } }) => ({
  video: searchVideos[selected],
});

export default connect(mapStateToProps)(MainVideo);
