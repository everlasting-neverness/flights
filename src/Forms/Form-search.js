import React from "react";

export class FormSearch extends React.Component {
  render() {
    return (
      <form className="form-search" method="GET">
        <input type="search" name="query" className="search" />
        <button type="submit" className="toggleButton search-button">
          Search
        </button>
      </form>
    );
  }
}
