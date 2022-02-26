import React from "react";
import BaseView from "./BaseView";
import { connect } from "react-redux";
import { changeCurSlide, changeSelected } from "../actions";
import style from "../sass/components/_slideWindow.module.scss";

class SlideWindow extends BaseView {
  _generateSlidesMarkup = () => {
    return this.props.videos.map((video, idx) => (
      <div
        className={style.slide}
        key={idx}
        style={{
          transform: `translateX(${(idx - this.props.curSlide) * 100}%)`,
        }}
      >
        <figure className={style.slide__img}>
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
          idx === this.props.curSlide && style["dots__dot--active"]
        }`}
        key={idx}
      ></button>
    ));
  };

  _change = (newSlide) => {
    this.props.changeCurSlide(newSlide);
    this.props.changeSelected(
      (this.props.page - 1) * this.props.video_per_page + newSlide
    );
  };

  prevSlide = () => {
    const newSlide =
      this.props.curSlide > 0
        ? this.props.curSlide - 1
        : this.props.videos.length - 1;
    this._change(newSlide);
  };
  nextSlide = () => {
    const newSlide =
      this.props.curSlide < this.props.videos.length - 1
        ? this.props.curSlide + 1
        : 0;
    this._change(newSlide);
  };

  render() {
    return (
      <div className={style.slider}>
        {this.props.videos.length > 0
          ? this._generateSlidesMarkup()
          : this.renderLoading()}
        <button
          className={`${style.slider__btn} ${style["slider__btn--left"]}`}
          onClick={this.prevSlide}
        >
          &larr;
        </button>
        <button
          className={`${style.slider__btn} ${style["slider__btn--right"]}`}
          onClick={this.nextSlide}
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
  misc: { video_per_page, curSlide, page },
}) => ({
  videos: searchVideos.slice(
    (page - 1) * video_per_page,
    page * video_per_page
  ),
  curSlide,
  page,
  video_per_page,
});

export default connect(mapStateToProps, { changeCurSlide, changeSelected })(
  SlideWindow
);
