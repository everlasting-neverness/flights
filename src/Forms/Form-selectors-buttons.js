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
      <form className="form-selectors-buttons" method="GET">
        <button type="submit" className="selector-button">
          Все рейсы
        </button>
        <button type="submit" className="selector-button">
          Прилет
        </button>
        <button type="submit" className="selector-button">
          Вылет
        </button>
        <button type="submit" className="selector-button">
          Задерживающиеся
        </button>
      </form>
    );
  }
}
