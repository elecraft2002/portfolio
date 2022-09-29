import React from "react";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Github } from "../../assets/svgs/github.svg";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav__container">
      <div className="nav">
        <ul className="nav__list">
          <li>
            <a className="nav__item" href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a className="nav__item" href="#">
              <Instagram />
            </a>
          </li>
          <li>
            <a className="nav__item" href="#">
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
