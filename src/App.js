import React from "react";
import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="page">
      <header className="page__header">
        <h1>Campaign wizard: template expanded</h1>
      </header>
      <Info />
      <aside>
        <h2>Helpful hints</h2>
        <p>
          We hate filling out info too, but we can't process your sales without
          more details - we need things like your deposit account info, customer
          service details, and a CC in order to accept orders and payments from
          future customers. But don't worry! Most of this information is easily
          available in your <span className="blue">Shopify Settings</span>. And
          while we can't copy this information directly for security reasons,
          we've provided a link to help make your job a little easier.
        </p>
      </aside>
    </div>
  );
}

export default App;
