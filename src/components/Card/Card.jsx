import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="coffe" />
      <p className="card__title">{props.title}</p>
      <p className="card__price">{props.price}$</p>
    </div>
  );
}
