import React from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import {
  searchVideos,
  addTerm,
  toggleDashboardModal,
  toggleFavoriteModal,
} from "../actions";
import TermsDropbox from "./TermsDropbox";
import FavoriteDropbox from "./FavoriteDropbox";
import UserDropbox from "./UserDropbox";
import Dashboard from "./Modal";
import logo from "../imgs/logo.png";
import user from "../imgs/user.jpg";
import photo1 from "../imgs/photo1.jpg";
import photo2 from "../imgs/photo2.jpg";
import dashboardBg from "../imgs/dashboard.jpg";
import style from "../sass/components/_header.module.scss";
import dashboardStyle from "../sass/components/_dashboard.module.scss";
import { ReactComponent as SearchSvg } from "../imgs/SVG/magnifying-glass.svg";
import { ReactComponent as HeartSvg } from "../imgs/SVG/heart.svg";

const Header = (props) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    if (term.trim().length === 0) return;

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
        <TermsDropbox input={inputRef} />
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
          <UserDropbox action={props.toggleDashboardModal} />
          <Dashboard
            showModal={props.showDashboard}
            closeModalAction={props.toggleDashboardModal}
            bgImg={dashboardBg}
          >
            <div className={dashboardStyle.user}>
              <img
                className={dashboardStyle.user__avatar}
                src={user}
                alt="user avatar"
              />
              <div className={dashboardStyle.user__info}>
                <h2 className={dashboardStyle.user__heading}>Tim</h2>
                <p className={dashboardStyle.user__description}>
                  YOYOOYOYOYOYOOOOOOOO
                </p>
              </div>
            </div>
            <div className={dashboardStyle.imgs}>
              <img
                className={dashboardStyle["imgs--1"]}
                src={photo1}
                alt="user photo 1"
              />
              <img
                className={dashboardStyle["imgs--2"]}
                src={photo2}
                alt="user photo 2"
              />
            </div>
          </Dashboard>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ modals: { showDashboard } }) => ({
  showDashboard,
});

export default connect(mapStateToProps, {
  searchVideos,
  addTerm,
  toggleDashboardModal,
  toggleFavoriteModal,
})(Header);
