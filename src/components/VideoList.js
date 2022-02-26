import React from "react";
import BaseView from "./BaseView";
import Video from "./Video";
import { connect } from "react-redux";
import Pagination from "./pagination";
import style from "../sass/components/_sidebar.module.scss";

class VideoList extends BaseView {
  render() {
    const _generateVideosMarkup = () => (
      <React.Fragment>
        <ul className={style.results}>
          {this.props.searchVideos.map((video, idx) => (
            <Video video={video} key={idx} />
          ))}
        </ul>
        <Pagination />
      </React.Fragment>
    );

    return (
      <aside className={style.sidebar}>
        {this.props.searchVideos.length > 0
          ? _generateVideosMarkup()
          : this.renderLoading()}
      </aside>
    );
  }
}

const mapStateToProps = ({
  videos: { searchVideos },
  misc: { video_per_page },
}) => {
  return { searchVideos: searchVideos.slice(0, video_per_page) };
};

export default connect(mapStateToProps)(VideoList);
