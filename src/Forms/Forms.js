import React from "react";
import { FormSearch } from "./Form-search.js";
import { FormSelectorsButtons } from "./Form-selectors-buttons.js";

export class Forms extends React.Component {
  render() {
    return (
      <div className="form-block">
        <FormSearch
          flights={this.props.flights}
          refreshFlights={this.props.refreshFlights}

        />
        <div className="form-selectors-block">
          <FormSelectorsButtons
            flights={this.props.flights}
            refreshFlights={this.props.refreshFlights}
            setToArrivals={this.props.setToArrivals}
          />
        </div>
      </div>
    );
  }
}
