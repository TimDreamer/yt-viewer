import React, { Component } from "react";
import { ReactComponent as Spinner } from "../imgs/SVG/spinner.svg";
import style from "../sass/components/_baseView.module.scss";

class BaseView extends Component {
  renderLoading = () => (
    <div className={style.spinner}>
      <Spinner className={style.spinner__icon} />
    </div>
  );
}

export default BaseView;
