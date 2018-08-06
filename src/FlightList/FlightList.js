import React from "react";

export class FlightList extends React.Component {
  render() {
    let output = this.props.flights
      .filter(flight => {
        return flight.type === this.props.flightType;
      })
      .filter(flight => {
        if (this.props.flightStatus === "all") {
          return true;
        } else {
          return flight.status === this.props.flightStatus;
        }
      })
      .sort((a, b) => {
        return (
          Date.parse("1970/01/01" + " " + a.time) -
          Date.parse("1970/01/01" + " " + b.time)
        );
      })
      .filter(flight => {
        if (!this.props.currentInputValue) {
          return true;
        }
        return flight.flight
          .toLowerCase()
          .includes(this.props.currentInputValue.toLowerCase());
      })
      .reduce((timeCheckedObj, flight) => {
        let time = flight.time.slice(0, 2) + ":00";
        if (!timeCheckedObj[time]) {
          timeCheckedObj[time] = [];
        }
        timeCheckedObj[time].push(flight);
        return timeCheckedObj;
      }, {});
    let newOutput = [];
    for (let time in output) {
      newOutput.push(
        <div className="time-range-block" key={time}>
          <div className="time-range">{time}</div>
          {output[time].map(flight => {
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
    return <div className="flight-main-block">{newOutput}</div>;
  }
}
