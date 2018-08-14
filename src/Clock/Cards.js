import React from "react";

export class AnimatedCard extends React.Component {
  render() {
    return (
      <div className={`flipCard ${this.props.position} ${this.props.animation}`}>
        <span>{this.props.digit}</span>
      </div>
    );
  }
}

export class StaticCard extends React.Component {
  render() {
    return (
      <div className={this.props.position}>
        <span>{this.props.digit}</span>
      </div>
    );
  }
}
