import React from "react";
import Dropbox from "./Dropbox";
import DeleteModal from "./Modal";
import {
  clearFavorites,
  removeFavorite,
  changeSelected,
  toggleFavoriteModal,
} from "../actions";
import { connect } from "react-redux";
import style from "../sass/components/_header.module.scss";
import deleteModalStyle from "../sass/components/_deleteModal.module.scss";
import bgImg from "../imgs/deleteModal.jpg";

class FavoriteDropbox extends Dropbox {
  _errorMessage = "Nothing includes yet!";

  _generateMarkupItems = (favs = this.props.favorites) => {
    return (
      <ul className={style["favorite-dropbox__list"]}>
        {favs.map((fav, idx) => (
          <li
            className={style["favorite-dropbox__item"]}
            key={idx}
            onClick={(e) => {
              const className = e.target.className;
              if (className.includes("delete")) {
                this.props.removeFavorite(fav.id.videoId);
              } else {
                this.props.changeSelected(fav);
              }
            }}
          >
            <figure className={style["favorite-dropbox__thumbnail-box"]}>
              <img
                className={style["favorite-dropbox__thumbnail"]}
                src={fav.snippet.thumbnails.medium.url}
                alt="favorite thumbnail"
              />
            </figure>
            <p className={style["favorite-dropbox__caption"]}>
              {fav.snippet.title}
            </p>
            <button className={style["favorite-dropbox__delete"]}>
              Delete
            </button>
          </li>
        ))}
        <button
          className={style["favorite-dropbox__clear"]}
          onClick={() => {
            this.props.toggleFavoriteModal();
          }}
        >
          Delete all favorites
        </button>
        <DeleteModal
          showModal={this.props.showFavoriteModal}
          closeModalAction={this.props.toggleFavoriteModal}
          bgImg={bgImg}
        >
          <div className={deleteModalStyle.delete}>
            <p className={deleteModalStyle.delete__content}>
              Are you sure to clear favorites?
            </p>
            <div className={deleteModalStyle.delete__btnGroup}>
              <button
                className={deleteModalStyle.delete__btnDelete}
                onClick={() => {
                  this.props.clearFavorites();
                  this.props.toggleFavoriteModal();
                }}
              >
                Delete
              </button>
              <button
                className={deleteModalStyle.delete__btnCancel}
                onClick={() => this.props.toggleFavoriteModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </DeleteModal>
      </ul>
    );
  };

  _generateMarkup = () => {
    return (
      <div className={style["favorite-dropbox"]}>
        {this.props.favorites.length > 0
          ? this._generateMarkupItems()
          : this.renderError(this._errorMessage)}
      </div>
    );
  };

  render() {
    return this._generateMarkup();
  }
}

const mapStateToProps = ({
  videos: { favorites },
  modals: { showFavoriteModal },
}) => ({
  favorites,
  showFavoriteModal,
});

export default connect(mapStateToProps, {
  clearFavorites,
  removeFavorite,
  changeSelected,
  toggleFavoriteModal,
})(FavoriteDropbox);
