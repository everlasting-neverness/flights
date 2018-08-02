import React from "react";
import { Forms } from "../Forms/Forms.js";
import { FlightList } from "../FlightList/FlightList.js";
import { flightsImitation } from "../FlightList/flightsImitation.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setToArrivals = this.setToArrivals.bind(this);
    this.setToDepartures = this.setToDepartures.bind(this);
    this.setToDelayed = this.setToDelayed.bind(this);
    this.flightSearchInput = this.flightSearchInput.bind(this);
    this.state = {
      flights: flightsImitation,
      flightType: "departure",
      flightStatus: "all",
      currentInputValue: ""
    };
  }

  setToArrivals() {
    this.setState({ flightType: "arrival" });
  }

  setToDepartures() {
    this.setState({ flightType: "departure" });
  }

  setToDelayed() {
    if (this.state.flightStatus === "all") {
      this.setState({ flightStatus: "DELAYED" });
    } else {
      this.setState({ flightStatus: "all" });
    }
  }

  flightSearchInput() {
    let userInput = document.querySelector(".search").value;
    console.log(userInput);
    this.setState({ currentInputValue: userInput });
  }

  render() {
    return (
      <div className="main">
        <div className="content">
          <h1 className="main-header">Flights</h1>
          <Forms
            flights={this.state.flights}
            flightType={this.state.flightType}
            flightStatus={this.state.flightStatus}
            currentInputValue={this.state.currentInputValue}
            setToArrivals={this.setToArrivals}
            setToDepartures={this.setToDepartures}
            setToDelayed={this.setToDelayed}
            flightSearchInput={this.flightSearchInput}
          />
        </div>
        <FlightList
          flights={this.state.flights}
          flightType={this.state.flightType}
          flightStatus={this.state.flightStatus}
          currentInputValue={this.state.currentInputValue}
        />
      </div>
    );
  }
}
