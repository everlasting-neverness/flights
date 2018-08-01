import React from "react";
import { FlightList } from "../FlightList/FlightList.js";

export class FormSelectorsButtons extends React.Component {
  render() {
    return (
      <div className="flightNavigation">
        <button type="submit" className="toggleButton" onClick={this.props.setToArrivals}>
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
