import React from "react";

class Form extends React.Component {
  state = {};
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
        </form>
      </div>
    );
  }
}

export default Form;
