import React from "react";
import { FormSearch } from "./Form-search.js";
import { FormSelectorsButtons } from "./Form-selectors-buttons.js";

export class Forms extends React.Component {
  render() {
    return (
      <div className="form-block">
        <FormSearch handleSearchChange={this.props.handleSearchChange} />
        <div className="form-selectors-block">
          <FormSelectorsButtons
            flightType={this.props.flightType}
            flightStatus={this.props.flightStatus}
            setToArrivals={this.props.setToArrivals}
            setToDepartures={this.props.setToDepartures}
            toggleDelayed={this.props.toggleDelayed}
          />
        </div>
      </div>
    );
  }
}
