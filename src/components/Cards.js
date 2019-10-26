import React from "react";

const Cards = props => {
  const { cardType, handleChange } = props;
  return (
    <div className="cards">
      <p className="cards__title">Name on Card</p>
      <div>
        <label>
          <input
            type="radio"
            name="cardType"
            className="cards__card"
            value="Visa"
            checked={cardType === "Visa"}
            onChange={event => handleChange(event.target)}
          />
          <img src="./images/visa-light.svg" alt="visa" />
        </label>
        <label>
          <input
            type="radio"
            name="cardType"
            className="cards__card"
            value="MasterCard"
            onChange={event => handleChange(event.target)}
            checked={cardType === "MasterCard"}
          />
          <img src="./images/mc-light.svg" alt="MasterCard" />
        </label>
        <label>
          <input
            type="radio"
            name="cardType"
            className="cards__card"
            value="Discover"
            checked={cardType === "Discover"}
            onChange={event => handleChange(event.target)}
          />
          <img src="./images/disc-light.svg" alt="Discover" />
        </label>
        <label>
          <input
            type="radio"
            name="cardType"
            className="cards__card"
            value="Amex"
            checked={cardType === "Amex"}
            onChange={event => handleChange(event.target)}
          />
          <img src="./images/amex-light.svg" alt="Amex" />
        </label>
      </div>
    </div>
  );
};

export default Cards;
