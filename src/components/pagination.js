import React from "react";
import style from "../sass/components/_pagination.module.scss";

const Pagination = () => {
  const initBtns = [
    {
      style: `${style["btn--inline"]} ${style["pagination__btn--prev"]}`,
      text: "Page",
      entity: <React.Fragment>&larr;</React.Fragment>,
    },
    {
      style: `${style["btn--inline"]} ${style["pagination__btn--next"]}`,
      text: "Page",
      entity: <React.Fragment>&rarr;</React.Fragment>,
    },
  ];
  const _generateBtnsMarkup = (btns = initBtns) => {
    return btns.map((btn, idx) => (
      <button className={btn.style} key={idx}>
        <span>
          {btn.text} {btn.entity}
        </span>
      </button>
    ));
  };

  return <div className={style.pagination}>{_generateBtnsMarkup()}</div>;
};

export default Pagination;
