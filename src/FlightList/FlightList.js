import React from "react";

export class FlightList extends React.Component {
  render() {
    return (
      <div className="flight-main-block">
        {this.props.flights
          .filter(flight => {
            return flight.type === this.props.flightType;
          })
          .map(flight => {
            return (
              <div className="flight-block" key={flight.flight}>
                <div className="flight-table-cell time">{flight.time}</div>
                <div className="flight-table-cell city">{flight.city}</div>
                <div className="flight-table-cell type">{flight.type}</div>
                <div className="flight-table-cell flight">{flight.flight}</div>
                <div className="flight-table-cell airport">
                  {flight.airport}
                </div>
                <div className="flight-table-cell status">{flight.status}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
