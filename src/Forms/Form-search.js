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
        <input
          type="search"
          name="flight-id"
          id="search"
          title="Введите номер рейса"
        />
        <button
          type="submit"
          className="selector-button"
          onClick={e => {
            e.preventDefault();
            let input = document.getElementById("search");
            let newFlights = original.filter(flight => {
              return flight.flight
                .toLowerCase()
                .includes(input.value.toLowerCase());
            });
            this.refresh(newFlights);
          }}
        >
          Поиск
        </button>
      </form>
    );
  }
}
