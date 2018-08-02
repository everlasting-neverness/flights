import React from "react";
import { FormSearch } from "./Form-search.js";
import { FormSelectorsButtons } from "./Form-selectors-buttons.js";

export class Forms extends React.Component {
  render() {
    return (
      <div className="form-block">
        <FormSearch
          flights={this.props.flights}
          flightSearchInput={this.props.flightSearchInput}
        />
        <div className="form-selectors-block">
          <FormSelectorsButtons
            flights={this.props.flights}
            flightType={this.props.flightType}
            flightStatus={this.props.flightStatus}
            setToArrivals={this.props.setToArrivals}
            setToDepartures={this.props.setToDepartures}
            setToDelayed={this.props.setToDelayed}
          />
        </div>
      </div>
    );
  }
}
