import React from "react";
import { Forms } from "../Forms/Forms.js";
import { FlightList } from "../FlightList/FlightList.js";
import { getData } from "../FlightsData/flightsImitation.js";
import Clock from "../Clock/Clock.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setToArrivals = this.setToArrivals.bind(this);
    this.setToDepartures = this.setToDepartures.bind(this);
    this.toggleDelayed = this.toggleDelayed.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      flights: null,
      flightType: "departure",
      flightStatus: "all",
      currentInputValue: ""
    };
    getData(flightsImitation => {
      this.setState({ flights: flightsImitation });
    });
  }

  setToArrivals() {
    this.setState({ flightType: "arrival" });
  }

  setToDepartures() {
    this.setState({ flightType: "departure" });
  }

  toggleDelayed() {
    if (this.state.flightStatus === "all") {
      this.setState({ flightStatus: "DELAYED" });
    } else {
      this.setState({ flightStatus: "all" });
    }
  }

  handleSearchChange(e) {
    this.setState({ currentInputValue: e.target.value });
  }

  render() {
    return (
      <div className="main">
        <h1 className="main-header">Flights</h1>
        <div className="content">
          <Forms
            flightType={this.state.flightType}
            flightStatus={this.state.flightStatus}
            currentInputValue={this.state.currentInputValue}
            setToArrivals={this.setToArrivals}
            setToDepartures={this.setToDepartures}
            toggleDelayed={this.toggleDelayed}
            handleSearchChange={this.handleSearchChange}
          />
          <div className="clock-block">
            <Clock />
          </div>
        </div>
        {!this.state.flights ? (
          <p className="loading">Waiting...</p>
        ) : (
          <FlightList
            flights={this.state.flights}
            flightType={this.state.flightType}
            flightStatus={this.state.flightStatus}
            currentInputValue={this.state.currentInputValue}
          />
        )}
      </div>
    );
  }
}
