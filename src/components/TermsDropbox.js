import React from "react";
import Dropbox from "./Dropbox";
import { removeTerm, searchVideos } from "../actions";
import { connect } from "react-redux";
import style from "../sass/components/_header.module.scss";

class TermsDropbox extends Dropbox {
  _generateItemMarkup = (list = this.props.searchTerms) => {
    return list.map((term, idx) => (
      <div
        className={style["terms-dropbox__item"]}
        key={idx}
        onClick={(e) => {
          const className = e.target.className;
          if (className.includes("deleteBtn")) {
            this.props.removeTerm(term);
          } else {
            this.props.input.current.value = term;
            this.props.searchVideos(term);
          }
        }}
      >
        <p className={style["terms-dropbox__term"]}>{term}</p>
        <button className={style["terms-dropbox__deleteBtn"]}>&times;</button>
      </div>
    ));
  };

  _generateMarkup = () => {
    return (
      <div className={style["terms-dropbox"]}>
        <ul className={style["terms-dropbox__list"]}>
          {this._generateItemMarkup()}
        </ul>
      </div>
    );
  };

  render() {
    return this.props.searchTerms.length > 0 ? this._generateMarkup() : "";
  }
}

const mapStateToProps = ({ videos: { searchTerms } }) => ({
  searchTerms,
});

export default connect(mapStateToProps, { removeTerm, searchVideos })(
  TermsDropbox
);
