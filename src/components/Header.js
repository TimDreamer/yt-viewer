import React from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { searchVideos, addTerm } from "../actions";
import FavoriteDropbox from "./FavoriteDropbox";
import UserDropbox from "./UserDropbox";
import logo from "../imgs/logo.png";
import user from "../imgs/user.jpg";
import style from "../sass/components/_header.module.scss";
import { ReactComponent as SearchSvg } from "../imgs/SVG/magnifying-glass.svg";
import { ReactComponent as HeartSvg } from "../imgs/SVG/heart.svg";

const Header = (props) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    console.log(term);
    props.searchVideos(term);
    props.addTerm(term);
    inputRef.current.value = "";
  };

  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="logo" />
      <form className={style.search} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search videos"
          className={style.search__input}
        />
        <button className={style.search__button}>
          <SearchSvg className={style.search__icon} />
        </button>
      </form>
      <nav className={style["user-nav"]}>
        <div className={style["user-nav__icon-box"]}>
          <HeartSvg className={style["user-nav__icon"]} />
          <span className={style["user-nav__notification"]}>favorites</span>
          <FavoriteDropbox />
        </div>
        <div className={style["user-nav__user"]}>
          <img
            className={style["user-nav__user-photo"]}
            src={user}
            alt="avatar"
          />
          <span className={style["user-nav__user-name"]}>Tim</span>
          <UserDropbox />
        </div>
      </nav>
    </header>
  );
};

export default connect(null, {
  searchVideos,
  addTerm,
})(Header);
