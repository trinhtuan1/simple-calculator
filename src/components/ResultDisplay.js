import React, { Component } from 'react';

class ResultDisplay extends Component {
  render() {
    return (
      <div className="result-display">
        <span>{ this.props.result }</span>
      </div>
    );
  }
}

export default ResultDisplay;