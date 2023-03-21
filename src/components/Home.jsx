import React from "react";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="left">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Bitcoin Dogs NFT Launching soon on Opensea & Generative ! Get Whitelisted 
            and trade pairs on ETH and BTC !
          </p>
          <button>GET WL</button>
        </div>
        <div className="right">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
