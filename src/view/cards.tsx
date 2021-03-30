import React from "react";
import Header from "./component/header";
import cardImg from "../assets/card.png";

const Cards: React.FC = () => {
  return (
    <div className="w-full h-full flex-column">
      <Header label="Cards" />
      <div className="h-content flex justify-around items-center">
        <div className="w-126">
          <div className="text-2xl">Order a Cards that fits your needs!</div>
          <div className="text-base leading-6">
            Define limits and permissions of your Mastercad. It will follow you
            everywhere and pay all your purchases. Order your 1st card right
            now!
          </div>
        </div>
        <img src={cardImg} alt="card" />
      </div>
    </div>
  );
};

export default Cards;
