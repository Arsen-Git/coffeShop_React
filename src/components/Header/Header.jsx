import './Header.scss'

export default function Header(){
    return(
        <div className="header__wrapper">
            <ul className="header__menu">
                <li className="menu__item">
                    <img src="./img/header-logo.svg" alt="logo" />
                    Coffee house
                </li>
                <li className="menu__item">Our coffee</li>
                <li className="menu__item">For your pleasure</li>
            </ul>
            <h1 className="header__title">Everything You Love About Coffee</h1>
            <div className="divider">
                <div className="divider__left"></div>
                <img src="./img/coffe-beans.svg" alt="beans" />
                <div className="divider__right"></div>
            </div>
            <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="header__subtitle">Want to try our beans?</h2>
            <div className="header__btn">More</div>
        </div>
    )
}