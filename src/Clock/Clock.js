import React from "react";
import FlipUnitContainer from "./FlipUnitContainer.js";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
  }

  render() {
    return (
      <div className={"clock"}>
        <FlipUnitContainer
          unit={"hours"}
          digit={this.state.hours}
          shuffle={this.state.hoursShuffle}
        />
        <FlipUnitContainer
          unit={"minutes"}
          digit={this.state.minutes}
          shuffle={this.state.minutesShuffle}
        />
      </div>
    );
  }
}

export default Clock;
