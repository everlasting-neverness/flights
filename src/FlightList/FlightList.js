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
          <div className="time">{flight.time}</div>
          <div className="city">{flight.city}</div>
          <div className="status">{flight.status}</div>
          <div className="flight">{flight.flight}</div>
          <div className="airport">{flight.airport}</div>
        </div>
      );
    });
  }
}
