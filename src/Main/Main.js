import React from "react";
import { Forms } from "/Forms/Forms.js";
import { FlightList } from "/FlightList/FlightList.js";
import { flightsImitation } from "/FlightList/flightsImitation.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.refreshFlights = this.refreshFlights.bind(this);
    this.state = {
      flightsImitation: flightsImitation
    };
  }
  refreshFlights(flightsImitation) {
    this.setState({ flightsImitation });
  }

  render() {
    return (
      <div className="main">
        <h1 className="main-header">Flights</h1>
        <Forms
          flightsImitation={this.state.flightsImitation}
          refreshFlights={this.refreshFlights}
        />
        <div className="flight-main-block">
          <FlightList
            flightsImitation={this.state.flightsImitation}
            refreshFlights={this.refreshFlights}
          />
        </div>
      </div>
    );
  }
}
