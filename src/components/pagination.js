import React from "react";
import { connect } from "react-redux";
import { changePage } from "../actions";
import style from "../sass/components/_pagination.module.scss";

const Pagination = ({ page, totalPages, changePage }) => {
  return (
    <div className={style.pagination}>
      {page > 1 ? (
        <button
          className={`${style["btn--inline"]} ${style["pagination__btn--prev"]}`}
          onClick={() => changePage(page - 1)}
        >
          <span>Page {page - 1} &larr;</span>
        </button>
      ) : (
        ""
      )}
      {page < totalPages ? (
        <button
          className={`${style["btn--inline"]} ${style["pagination__btn--next"]}`}
          onClick={() => changePage(page + 1)}
        >
          <span>Page {page + 1} &rarr;</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({
  videos: { searchVideos },
  misc: { page, video_per_page },
}) => ({
  totalPages: Math.ceil(searchVideos.length / video_per_page || 0),
  page,
});

export default connect(mapStateToProps, { changePage })(Pagination);
