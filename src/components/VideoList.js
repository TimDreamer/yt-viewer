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
        <Pagination />
        <ul className={style.results}>
          {this.props.searchVideos.map((video, idx) => (
            <Video video={video} key={idx} index={idx} />
          ))}
        </ul>
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
  misc: { video_per_page, page },
}) => {
  return {
    searchVideos: searchVideos.slice(
      (page - 1) * video_per_page,
      page * video_per_page
    ),
  };
};

export default connect(mapStateToProps)(VideoList);
