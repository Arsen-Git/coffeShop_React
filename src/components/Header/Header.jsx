import "./Header.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header__wrapper">
      <HeaderMenu />
      <h1 className="header__title">Everything You Love About Coffee</h1>
      <div className="divider">
        <div className="divider__left"></div>
        <img src="./img/coffe-beans.svg" alt="beans" />
        <div className="divider__right"></div>
      </div>
      <h2 className="header__subtitle">
        We makes every day full of energy and taste
      </h2>
      <h2 className="header__subtitle">Want to try our beans?</h2>
      <Link to={"/market"}>
        <div className="header__btn">More</div>
      </Link>
    </div>
  );
}
