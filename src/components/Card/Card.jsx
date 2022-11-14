import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({
  imgUrl,
  title,
  price,
  country = "",
  onSelectProduct,
}) {
  return (
    <Link to={"/product"}>
      <div onClick={() => onSelectProduct({ country, price })} className="card">
        <img src={imgUrl} alt="coffe" />
        <p className="card__title">{title}</p>
        {country && <p className="card__country">{country}</p>}
        <p className="card__price">{price}$</p>
      </div>
    </Link>
  );
}
