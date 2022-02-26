import React from "react";

import MainVideo from "./MainVideo";
import SlideWindow from "./SlideWindow";
import style from "../sass/components/_content.module.scss";

const ContentView = () => {
  return (
    <div className={style.content}>
      <MainVideo />
      <SlideWindow />
    </div>
  );
};

export default ContentView;
