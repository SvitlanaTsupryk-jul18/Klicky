import React from "react";
import Details from "./Details";

function Info() {
  return (
    <div className="info">
      <main className="info__main">
        <Details
          children={<p>Some Text1</p>}
          title={"How will customers contact you?"}
        />
        <Details
          children={<p>Some Text2</p>}
          title={"How will customers pay you?"}
        />
        <Details title={"How will Klickly charge you?"} />
        <Details
          children={<p>Some Text4</p>}
          title={"How will Klickly contact you?"}
        />
      </main>
      <footer className="info__footer">
        <button type="button" className="info__btn">
          Back
        </button>
        <button type="button" className="info__btn info__btn--dark">
          Launch
        </button>
      </footer>
    </div>
  );
}

export default Info;
