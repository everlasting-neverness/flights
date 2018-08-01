import React from "react";
import { FlightList } from "../FlightList/FlightList.js";

export class FormSelectorsButtons extends React.Component {
  render() {
    return (
      <div className="flightNavigation">
        <button
          type="submit"
          className={`toggleButton ${
            this.props.flightType === "arrival" ? "toggleButtonActive" : ""
          }`}
          onClick={this.props.setToArrivals}
        >
          Arrivals
        </button>
        <button
          type="submit"
          className={`toggleButton ${
            this.props.flightType === "departure" ? "toggleButtonActive" : ""
          }`}
          onClick={this.props.setToDepartures}
        >
          Departures
        </button>
        <button
          type="submit"
          className={`toggleButton ${
            this.props.flightStatus === "DELAYED" ? "toggleButtonActive" : ""
          }`}
          onClick={this.props.setToDelayed}
        >
          Delayed
        </button>
      </div>
    );
  }
}
