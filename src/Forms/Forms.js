import React from "react";
import { FormSearch } from "./Form-search.js";
import { FormSelectorsButtons } from "./Form-selectors-buttons.js";

export class Forms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-block">
        <FormSearch
          flightsImitation={this.props.flightsImitation}
          refreshFlights={this.props.refreshFlights}
          original={this.props.original}
        />
        <div className="form-selectors-block">
          <FormSelectorsButtons
            flightsImitation={this.props.flightsImitation}
            refreshFlights={this.props.refreshFlights}
            original={this.props.original}
          />
        </div>
      </div>
    );
  }
}
