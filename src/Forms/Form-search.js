import React from "react";

export class FormSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  refresh(flightsImitation) {
    this.props.refreshFlights(flightsImitation);
  }
  render() {
    let original = this.props.original;
    return (
      <form className="form-search" method="GET">
        <input type="search" name="flight-id" className="search" />
        <button
          type="submit"
          className="selector-button"
          onClick={e => {
            e.preventDefault();
            let input = document.querySelector(".search");
            let newFlights = original.filter(flight => {
              return flight.flight
                .toLowerCase()
                .includes(input.value.toLowerCase());
            });
            this.refresh(newFlights);
          }}
        >
          Search
        </button>
      </form>
    );
  }
}
