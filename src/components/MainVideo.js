import React from "react";
import BaseView from "./BaseView";
import { addFavorite, removeFavorite, changeSelected } from "../actions";
import { connect } from "react-redux";
import { ReactComponent as HeartSvg } from "../imgs/SVG/heart.svg";
import style from "../sass/components/_mainVideo.module.scss";

class MainVideo extends BaseView {
  render() {
    const { video, favorites, addFavorite, removeFavorite } = this.props;
    const isFavorite = favorites.some(
      (fav) => video.id.videoId === fav.id.videoId
    );
    const videoSrc =
      video && `https://www.youtube.com/embed/${video.id.videoId}`;
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
            <HeartSvg
              className={`${style.favorite__icon} ${
                isFavorite ? style.favorite__selected : ""
              }`}
              onClick={() => {
                isFavorite
                  ? removeFavorite(video.id.videoId)
                  : addFavorite(video);
              }}
            />
          </button>
        </div>
      </div>
    ) : (
      this.renderLoading()
    );
  }
}

const mapStateToProps = ({
  videos: { searchVideos, favorites },
  misc: { selected },
}) => ({
  video: selected || searchVideos[0],
  favorites,
});

export default connect(mapStateToProps, {
  addFavorite,
  removeFavorite,
  changeSelected,
})(MainVideo);
