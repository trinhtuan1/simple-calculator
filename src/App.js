import React, { Component } from 'react';
import InputDisplay from './components/InputDisplay';
import ResultDisplay from './components/ResultDisplay';
import NumPad from './components/NumPad';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      result: 0
    };
  }

  handleClick = button => {
    if(button === 'ac') {
      this.clear();
    } else if(button === 'backspace') {
      this.backspace();
    } else if(button === '=') {
      this.calculate();
    } else {
      this.addInputValue(button);
    }
  }

  clear = () => {
    this.setState({
      inputValue: '',
      result: 0
    });
  };

  backspace = () => {
    this.setState({
      inputValue: this.state.inputValue.slice(0, -1)
    });
  };

  addInputValue = (button) => {
    this.setState({
      inputValue: this.state.inputValue + button
    });
  };

  calculate = () => {
    try {
      this.setState({
        //eslint-disable-next-line
        result: eval(this.state.inputValue)
      });
    } catch(err) {
      this.setState({
        result: 'Input Error'
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Simple Calculator</h1>
        <InputDisplay inputValue={ this.state.inputValue} />
        <ResultDisplay result={ this.state.result } />
        <NumPad handleClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;