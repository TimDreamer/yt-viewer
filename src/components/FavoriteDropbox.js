import React from "react";
import Dropbox from "./Dropbox";
import { clearFavorites, changeSelected } from "../actions";
import { connect } from "react-redux";
import style from "../sass/components/_header.module.scss";

class FavoriteDropbox extends Dropbox {
  _errorMessage = "Nothing includes yet!";

  _generateMarkupItems = (favs = this.props.favorites) => {
    return (
      <ul className={style["favorite-dropbox__list"]}>
        {favs.map((fav, idx) => (
          <li
            className={style["favorite-dropbox__item"]}
            key={idx}
            onClick={() => {
              this.props.changeSelected(fav);
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
          </li>
        ))}
        <button
          className={style["favorite-dropbox__clear"]}
          onClick={() => {
            this.props.clearFavorites();
          }}
        >
          Delete all favorites
        </button>
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

const mapStateToProps = ({ videos: { favorites } }) => ({
  favorites,
});

export default connect(mapStateToProps, { clearFavorites, changeSelected })(
  FavoriteDropbox
);
