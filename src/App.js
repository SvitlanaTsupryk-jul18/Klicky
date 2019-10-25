import React from "react";
import "./App.scss";
import Info from "./components/Info";

class App extends React.Component {
  state = {
    information: []
  };

  setInfo = info => {
    this.setState(prevState => {
      return {
        information: [...prevState.information, info]
      };
    });
  };

  sendInfo = () => {
    ///some request
  };

  render() {
    return (
      <div className="page">
        <header className="page__header">
          <h1>Campaign wizard: template expanded</h1>
        </header>
        <div className="page__wrapper content">
          <Info setInfo={this.setInfo} sendInfo={this.sendInfo} />
          <aside className="content__aside aside">
            <h2 className="aside__title">Helpful hints</h2>
            <p className="aside__text">
              We hate filling out info too, but we can't process your sales
              without more details - we need things like your deposit account
              info, customer service details, and a CC in order to accept orders
              and payments from future customers. But don't worry! Most of this
              information is easily available in your{" "}
              <span className="blue">Shopify Settings</span>. And while we can't
              copy this information directly for security reasons, we've
              provided a link to help make your job a little easier.
            </p>
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
