import React from "react";

export class FormSearch extends React.Component {
  render() {
    return (
      <form className="form-search" method="GET">
        <input
          type="search"
          name="flight-id"
          id="search"
          title="Введите номер рейса"
        />
        <button type="submit" id="submit-button">
          Поиск
        </button>
      </form>
    );
  }
}
