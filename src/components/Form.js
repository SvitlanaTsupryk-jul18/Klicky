import React from "react";

class Form extends React.Component {
  state = {
    debitCard: "Credit or Debit",
    cardType: "",
    name: ""
  };
  render() {
    return (
      <div>
        <p>
          We're pretty unique in that you don't need to pay upfront to
          advertise. Add a payment method info so that we can get paid when we
          make a sale.
        </p>
        <form>
          <h3>Billing Information</h3>
          {/* <div className="row_item">
            <select
              name="debitCard"
              value={ebitCard.value}
              onChange={event => this.selectItem(event.target)}
            >
              <option value="debit">ДЕРЖАВНЕ ПІДПРИЄМСТВО</option>
              <option value="credit">ІНШІ ОРГАНІЗАЦІЙНО-ПРАВОВІ ФОРМИ</option>
            </select>
          </div>
          <p>
            Name on Card <input type="checkbox"></input>
          </p>
          <input
            name="name"
            type="text"
            id="name"
            onChange={event => name.change(event.target.value || undefined)}
            onFocus={() => name.focus()}
            value={name.value || ""}
            placeholder="Jimmy Santos"
            className={this.state.name.active ? "active--input" : ""}
          /> */}
        </form>
      </div>
    );
  }
}

export default Form;
