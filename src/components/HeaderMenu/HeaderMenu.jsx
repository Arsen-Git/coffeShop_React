import "./HeaderMenu.scss";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <ul className="header__menu">
      <Link to={"/"}>
        <li className="menu__item">
          <img src="./img/header-logo.svg" alt="logo" />
          Coffee house
        </li>
      </Link>
      <Link to={"/market"}>
        <li className="menu__item">Our coffee</li>
      </Link>
      <Link to={"/pleasure"}>
        <li className="menu__item">For your pleasure</li>
      </Link>
    </ul>
  );
}
