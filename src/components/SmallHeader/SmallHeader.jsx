import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./SmallHeader.scss";

export default function SmallHeader({ title }) {
  return (
    <div className="smallHeader__wrapper">
      <HeaderMenu />
      <h1 className="smallHeader__title">{title}</h1>
    </div>
  );
}
