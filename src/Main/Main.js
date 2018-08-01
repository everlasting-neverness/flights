import React from "react";
import { Forms } from "../Forms/Forms.js";
import { FlightList } from "../FlightList/FlightList.js";
import { flightsImitation } from "../FlightList/flightsImitation.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.refreshFlights = this.refreshFlights.bind(this);
    this.setToArrivals = this.setToArrivals.bind(this);
    this.state = {
      flights: flightsImitation,
      flightType: "departure"
    };
  }
  refreshFlights(flights) {
    this.setState({ flights });
  }

  setToArrivals() {
    this.setState({ flightType: "arrival" });
  }

  render() {
    return (
      <div className="main">
        <div className="content">
          <h1 className="main-header">Flights</h1>
          <Forms
            flights={this.state.flights}
            refreshFlights={this.refreshFlights}
            setToArrivals={this.setToArrivals}
          />
        </div>
        <FlightList
          flights={this.state.flights}
          refreshFlights={this.refreshFlights}
          flightType={this.state.flightType}
        />
      </div>
    );
  }
}
