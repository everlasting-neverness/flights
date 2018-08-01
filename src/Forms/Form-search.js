import React from "react";

export class FormSearch extends React.Component {
  render() {
    return (
      <form className="form-search" method="GET">
        <input type="search" name="flight-id" className="search" />
        <button type="submit" className="selector-button">
          Search
        </button>
      </form>
    );
  }
}
