import React from "react";
import ReactDOM from "react-dom";
import { FormSearch } from "./Forms/Form-search.js";
import { FormSelectorsButtons } from "./Forms/Form-selectors-buttons.js";

let data;

class Forms extends React.Component {
  render() {
    return (
      <div className="form-block">
        <FormSearch />
        <div className="form-selectors-block">
          <FormSelectorsButtons />
        </div>
      </div>
    );
  }
}

let flightsImitation = [
  {
    time: "13:12",
    flight: 312,
    airport: "SVO"
  },
  {
    time: "17:00",
    flight: 256,
    airport: "DMO"
  },
  {
    time: "9:45",
    flight: 17,
    airport: "SVO"
  },
  {
    time: "21:12",
    flight: 47,
    airport: "DMO"
  }
];

window.flightsImitation = flightsImitation;

class FlightList extends React.Component {
  constructor() {
    super();
    this.state = {
      APIUrl: "",
      data: flightsImitation
    };
  }
  render() {
    let divs = flightsImitation.map(flight => {
      return (
        <div className="flight-block" key={flight.flight}>
          <div className="time">{flight.time}</div>
          <div className="flight">{flight.flight}</div>
          <div className="airport">{flight.airport}</div>
        </div>
      );
    });
    return divs;
  }
}

function render() {
  ReactDOM.render(
    <div className="main-div">
      <h1 className="main-header">Flights</h1>
      <Forms />
      <div className="flight-main-block">
        <FlightList />
      </div>
    </div>,
    document.getElementById("root")
  );
}

render();
