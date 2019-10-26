import React from "react";
import Cards from "./Cards";

class Form extends React.Component {
  state = {
    debitCard: "Credit or Debit",
    cardType: "",
    userName: ""
  };

  handleChange = target => {
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { debitCard, cardType, userName } = this.state;
    console.log(this.state);
    return (
      <div className="charge">
        <p className="charge__text">
          We're pretty unique in that you don't need to pay upfront to
          advertise. Add a payment method info so that we can get paid when we
          make a sale.
        </p>
        <form className="form">
          <h3 className="form__title">Billing Information</h3>
          <div className="form__select">
            <select
              name="debitCard"
              value={debitCard.value}
              onChange={event => this.handleChange(event.target)}
            >
              <option value="credit">Credit or Debit card</option>
              <option value="debit">Debit card</option>
              <option value="credit">Credit card</option>
            </select>
          </div>
          <Cards handleChange={this.handleChange} cardType={cardType} />

          <input
            name="userName"
            type="text"
            id="userName"
            onChange={event => this.handleChange(event.target)}
            value={userName.value || ""}
            placeholder="Jimmy Santos"
            // className={userName.active ? "active--input" : ""}
          />
        </form>
      </div>
    );
  }
}

export default Form;
