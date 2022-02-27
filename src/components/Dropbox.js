import React, { Component } from "react";
import { ReactComponent as WarningSvg } from "../imgs/SVG/notification.svg";
import style from "../sass/components/_dropbox.module.scss";
class Dropbox extends Component {
  renderError(errorMessage = "Something goes wrong!") {
    return (
      <div className={style.error}>
        <WarningSvg className={style.error__icon} />
        <p className={style.error__info}>{errorMessage}</p>
      </div>
    );
  }
}

export default Dropbox;
