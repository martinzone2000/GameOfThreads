import React, { Component } from 'react';

export default class Score extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var cc = this.props.report.change>0 ? "plus":"minus";
    cc = this.props.report.change==0 ? "clear":cc;
    return (
      <div className="Score" className="score">
        <span>{this.props.report.name}</span>
        <span>{this.props.report.score}</span>
        <span className={cc}>{this.props.report.change}</span>
      </div>
    );
  }
}

