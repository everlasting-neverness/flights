import React from "react";

export class FlightList extends React.Component {
  constructor(props) {
    super(props);
  }
  refresh(flightsImitation) {
    this.props.refreshFlights(flightsImitation);
  }
  render() {
    return this.props.flightsImitation.map(flight => {
      return (
        <div className="flight-block" key={flight.flight}>
          <div className="flight-table-cell time">{flight.time}</div>
          <div className="flight-table-cell city">{flight.city}</div>
          <div className="flight-table-cell type">{flight.type}</div>
          <div className="flight-table-cell flight">{flight.flight}</div>
          <div className="flight-table-cell airport">{flight.airport}</div>
          <div className="flight-table-cell status">{flight.status}</div>
        </div>
      );
    });
  }
}
