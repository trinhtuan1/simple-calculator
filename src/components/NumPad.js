import React, { Component } from 'react';

class NumPad extends Component {
  render() {
    return (
      <div className="num-pad">
        <button type="button" name="ac" className="button ac-button"
          onClick={ e => this.props.handleClick(e.target.name) }>AC</button>
        <button type="button" name="(" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>(</button>
        <button type="button" name=")" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>)</button>
        <button type="button" name="backspace" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>&#9003;</button>

        <button type="button" name="7" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>7</button>
        <button type="button" name="8" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>8</button>
        <button type="button" name="9" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>9</button>
        <button type="button" name="+" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>+</button>

        <button type="button" name="4" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>4</button>
        <button type="button" name="5" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>5</button>
        <button type="button" name="6" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>6</button>
        <button type="button" name="-" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>-</button>

        <button type="button" name="1" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>1</button>
        <button type="button" name="2" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>2</button>
        <button type="button" name="3" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>3</button>
        <button type="button" name="*" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>&times;</button>

        <button type="button" name="0" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>0</button>
        <button type="button" name="." className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>.</button>
        <button type="button" name="=" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>=</button>
        <button type="button" name="/" className="button"
          onClick={ e => this.props.handleClick(e.target.name) }>&divide;</button>
      </div>
    );
  }
}

export default NumPad;