import React from "react";
import { Link } from "react-router-dom";
import Dropbox from "./Dropbox";
import style from "../sass/components/_header.module.scss";
import { ReactComponent as UserSvg } from "../imgs/SVG/user.svg";
import { ReactComponent as LogoutSvg } from "../imgs/SVG/log-out.svg";
import { ReactComponent as PhoneSvg } from "../imgs/SVG/phone.svg";

const svgs = [
  { icon: UserSvg, text: "View Profile" },
  { icon: PhoneSvg, text: "Support" },
  { icon: LogoutSvg, text: "Logout" },
];

class UserDropbox extends Dropbox {
  _generateMarkup = (SVGs = svgs) =>
    SVGs.map((SVG, idx) => (
      <li
        className={style["user-dropbox__item"]}
        key={idx}
        onClick={() => (idx === 0 ? this.props.action() : undefined)}
      >
        <Link to="/" className={style["user-dropbox__link"]}>
          <SVG.icon className={style["user-dropbox__icon"]} />
          <span>{SVG.text}</span>
        </Link>
      </li>
    ));

  render() {
    return (
      <div className={style["user-dropbox"]}>
        <ul className={style["user-dropbox__list"]}>
          {this._generateMarkup()}
        </ul>
      </div>
    );
  }
}

export default UserDropbox;
