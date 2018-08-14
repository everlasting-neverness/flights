import React from "react";
import { StaticCard, AnimatedCard } from "./Cards.js";

class FlipUnitContainer extends React.Component {
  render() {
    let now = this.props.digit;
    let before = this.props.digit - 1;
    if (this.props.unit !== "hours") {
      before = before === -1 ? 59 : before;
    } else {
      before = before === -1 ? 23 : before;
    }
    if (now < 10) now = `0${now}`;
    if (before < 10) before = `0${before}`;
    const digit1 = this.props.shuffle ? before : now;
    const digit2 = !this.props.shuffle ? before : now;
    const animation1 = this.props.shuffle ? "fold" : "unfold";
    const animation2 = !this.props.shuffle ? "fold" : "unfold";
    return (
      <div className={"flipUnitContainer"}>
        <StaticCard position={"upperCard"} digit={now} />
        <StaticCard position={"lowerCard"} digit={before} />
        <AnimatedCard
          position={"first"}
          digit={digit1}
          animation={animation1}
        />
        <AnimatedCard
          position={"second"}
          digit={digit2}
          animation={animation2}
        />
      </div>
    );
  }
}

export default FlipUnitContainer;
