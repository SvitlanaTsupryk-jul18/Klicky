import React from "react";
import Cards from "./Cards";
// import Input from "./Input";
import Select from "./Select";

class Form extends React.Component {
  state = {
    debitCard: "Credit or Debit",
    cardType: "",
    userName: "",
    cardNumber: "",
    cardCVV: "",
    cardMonth: "",
    cardYear: ""
  };

  handleChange = target => {
    this.setState({
      // ...this.state,
      [target.name]: target.value
    });
  };

  render() {
    const {
      debitCard,
      cardType,
      userName,
      cardNumber,
      cardCVV,
      cardMonth,
      cardYear
    } = this.state;
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
          <Select
            name={"debitCard"}
            value={debitCard}
            handleChange={this.handleChange}
            options={[
              { value: "credit", label: "Credit or Debit card" },
              { value: "debit", label: "Debit card" },
              { value: "credit", label: "Credit card" }
            ]}
          />
          <Cards handleChange={this.handleChange} cardType={cardType} />
          <input
            name="userName"
            type="text"
            id="userName"
            onChange={event => this.handleChange(event.target)}
            value={userName.value}
            placeholder="Jimmy Santos"
            className="form__input form__input--large"
          />
          <div className="form__card-number">
            <div className="form__wrapper">
              <p className="form__label">card number</p>
              <input
                name="cardNumber"
                type="text"
                maxLength="16"
                minLength="16"
                placeholder="e.g. 1234 1234 1234 1234"
                value={cardNumber.value}
                onChange={event => this.handleChange(event.target)}
                className="form__input"
              />
            </div>
            <div className="form__wrapper">
              <p className="form__label">CVV</p>
              <input
                name="cardCVV"
                type="text"
                maxLength="3"
                minLength="3"
                placeholder="e.g. 243"
                value={cardCVV.value}
                onChange={event => this.handleChange(event.target)}
                className="form__input form__input--cvv"
              />
            </div>

            <div className="form__wrapper">
              <p className="form__label">Expiration date</p>
              <Select
                name={"cardMonth"}
                value={cardMonth}
                handleChange={this.handleChange}
                className={"select__input--width"}
                options={[
                  { value: "Month", label: "Month" },
                  { value: "1", label: "January" },
                  { value: "2", label: "February" },
                  { value: "3", label: "March" },
                  { value: "4", label: "April" },
                  { value: "5", label: "May" },
                  { value: "6", label: "June" },
                  { value: "7", label: "July" },
                  { value: "8", label: "August" },
                  { value: "9", label: "September" },
                  { value: "10", label: "October" },
                  { value: "11", label: "November" },
                  { value: "12", label: "December" }
                ]}
              />
            </div>
            <Select
              name={"cardYear"}
              value={cardYear}
              handleChange={this.handleChange}
              className={"select__input--width"}
              options={[
                { value: "Year", label: "Year" },
                { value: "2019", label: "2019" },
                { value: "2020", label: "2020" },
                { value: "2021", label: "2021" },
                { value: "2022", label: "2022" },
                { value: "2023", label: "2023" },
                { value: "2024", label: "2024" }
              ]}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
