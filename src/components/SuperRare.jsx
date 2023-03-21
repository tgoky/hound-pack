import React from "react";
import { superRareData } from "../data";
import Card from "./Card";

const SuperRare = () => {
  return (
    <div className="super-rare" id="super-rare">
      <div className="title-container">
        <h2 className="title">Hound Edition</h2>
        <p className="description">
          SneakPeak to some collections, more to be revealed
          via <a href="#home">OpenSea</a>
        </p>
      </div>
      <div className="cards">
        {superRareData.map((item, index) => (
          <Card
            image={item.image}
            series={item.series}
            title={item.title}
            price={item.price}
            tag={item.tag}
            time={item.time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperRare;
