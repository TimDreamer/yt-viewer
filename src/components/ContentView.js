import React from "react";
import BaseView from "./BaseView";

import MainVideo from "./MainVideo";
import SlideWindow from "./SlideWindow";
import style from "../sass/components/_content.module.scss";

class ContentView extends BaseView {
  render() {
    return (
      <div className={style.content}>
        <MainVideo />
        <SlideWindow />
      </div>
    );
  }
}

export default ContentView;
