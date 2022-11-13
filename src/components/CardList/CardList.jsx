import "./CardList.scss";
import Card from "../Card/Card";
import React from "react";
import axios from "axios";

export default function CardList(props) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get(props.link).then((res) => setItems(res.data));
  }, []);
  return (
    <ul className="container">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          price={item.price}
          country={item.country}
        />
      ))}
    </ul>
  );
}
