import React from "react";
import { FlightList } from "/FlightList/FlightList.js";

export class FormSelectorsButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  refresh(flightsImitation) {
    this.props.refreshFlights(flightsImitation);
  }

  render() {
    return (
      <div className="flightNavigation">
        <button type="submit" className="toggleButton">
          Arrivals
        </button>
        <button type="submit" className="toggleButton">
          Departures
        </button>
        <button type="submit" className="toggleButton">
          Delayed
        </button>
      </div>
    );
  }
}
