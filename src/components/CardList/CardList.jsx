import "./CardList.scss";
import Card from "../Card/Card";
import React from "react";

export default function CardList({ items, onSelectProduct }) {
  return (
    <ul className="container">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          price={item.price}
          country={item.country}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </ul>
  );
}
