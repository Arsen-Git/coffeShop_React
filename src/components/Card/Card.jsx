import "./Card.scss";

export default function Card({ imgUrl, title, price, country = "" }) {
  return (
    <div className="card">
      <img src={imgUrl} alt="coffe" />
      <p className="card__title">{title}</p>
      {country && <p className="card__country">{country}</p>}
      <p className="card__price">{price}$</p>
    </div>
  );
}
