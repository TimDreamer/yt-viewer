import React from "react";
import BaseView from "./BaseView";
import { connect } from "react-redux";
import style from "../sass/components/slideWindow.module.scss";

class SlideWindow extends BaseView {
  _generateSlidesMarkup = () => {
    return this.props.videos.map((video, idx) => (
      <div
        className={style.slide}
        key={idx}
        style={{ transform: `translateX(${idx * 100}%)` }}
      >
        <figure className={style.slide__image}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
        </figure>
        <div className={style.slide__info}>
          <h1>{video.snippet.title}</h1>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    ));
  };

  _generateDotsMarkup = (len = 0) => {
    return Array.from({ length: len }).map((_, idx) => (
      <button
        className={`${style.dots__dot} ${
          idx === 0 && style["dots__dot--active"]
        }`}
        key={idx}
      ></button>
    ));
  };

  render() {
    console.log(this.props.videos);
    return (
      <div className={style.slider}>
        {this.props.videos.length > 0
          ? this._generateSlidesMarkup()
          : this.renderLoading()}
        <button
          className={`${style.slider__btn} ${style["slider__btn--left"]}`}
        >
          &larr;
        </button>
        <button
          className={`${style.slider__btn} ${style["slider__btn--right"]}`}
        >
          &rarr;
        </button>
        <div className={style.dots}>
          {this.props.videos &&
            this._generateDotsMarkup(this.props.videos.length)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  videos: { searchVideos },
  misc: { video_per_page },
}) => ({
  videos: searchVideos.slice(0, video_per_page),
});

export default connect(mapStateToProps)(SlideWindow);
