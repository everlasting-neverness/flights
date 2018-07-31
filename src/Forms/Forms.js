import React from "react";
import { FormSearch } from "./Form-search.js";
import { FormSelectorsButtons } from "./Form-selectors-buttons.js";

export class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.flightsImitation = props.flightsImitation;
  }
  refresh(flightsImitation) {
    this.props.refreshFlights(flightsImitation);
  }
  render() {
    return (
      <div className="form-block">
        <FormSearch
          flightsImitation={this.flightsImitation}
          refreshFlights={this.props.refreshFlights}
        />
        <div className="form-selectors-block">
          <FormSelectorsButtons
            flightsImitation={this.flightsImitation}
            refreshFlights={this.props.refreshFlights}
          />
        </div>
      </div>
    );
  }
}
