import "./CardList.scss";
import Card from "../Card/Card";
import React from "react";
import axios from "axios";

export default function CardList() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/coffe-items")
      .then((res) => setItems(res.data));
  }, []);
  return (
    <ul className="container">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          price={item.price}
        />
      ))}
    </ul>
  );
}
