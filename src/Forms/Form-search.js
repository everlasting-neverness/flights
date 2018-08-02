import React from "react";

export class FormSearch extends React.Component {
  render() {
    return (
      <form className="form-search">
        <input
          type="search"
          name="query"
          className="search"
          placeholder="Enter a flight number"
          onChange={this.props.flightSearchInput}
        />
      </form>
    );
  }
}
