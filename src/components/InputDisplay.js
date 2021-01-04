import React, { Component } from 'react';

class InputDisplay extends Component {
  render() {
    return (
      <div className="input-display">
        { this.props.inputValue }
      </div>
    );
  }
}

export default InputDisplay;