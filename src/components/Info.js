import React from "react";
import Details from "./Details";
import Form from "./Form";

const Info = ({ setInfo, sendInfo }) => {
  return (
    <div className="info">
      <main className="info__main">
        <Details
          children={<p>Some Text1</p>}
          title={"How will customers contact you?"}
          name={"customersContact"}
          setInfo={setInfo}
        />
        <Details
          children={<p>Some Text2</p>}
          title={"How will customers pay you?"}
          name={"customersPay"}
          setInfo={setInfo}
        />
        <Details
          title={"How will Klickly charge you?"}
          name={"KlickyCharge"}
          setInfo={setInfo}
          children={<Form />}
        />
        <Details
          children={<p>Some Text4</p>}
          title={"How will Klickly contact you?"}
          name={"KlickyContact"}
          setInfo={setInfo}
        />
      </main>
      <footer className="info__footer">
        <button type="button" className="info__btn btn">
          Back
        </button>
        <button
          type="button"
          className="info__btn btn--dark"
          onClick={sendInfo}
        >
          Launch
        </button>
      </footer>
    </div>
  );
};

export default Info;
