import React from "react";
import style from "../sass/components/_footer.module.scss";

const Footer = () => {
  const _generateLinkMarkup = (
    links = ["Download", "Contact us", "Support", "Q/A"]
  ) => {
    return links.map((desp, idx) => (
      <li className={style.nav__item} key={idx}>
        <a href="#" className={style.nav__link}>
          {desp}
        </a>
      </li>
    ));
  };

  return (
    <footer className={style.footer}>
      <ul className={style.nav}>{_generateLinkMarkup()}</ul>
      <p className={style.copyright}>
        &copy; Copyright 2020 by website practice
      </p>
    </footer>
  );
};

export default Footer;
