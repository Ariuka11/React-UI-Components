import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculationButton from './components/ButtonComponents/CalculationButton';
import numberArray from './components/ButtonArray/numberArray';
import iconArray from './components/ButtonArray/iconArray';


class App extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.updateCalc = num => {
      this.setState({displayValue : num});
    };
  }
  render(){
    return (
      <div className = "container">
        <CalculatorDisplay value = {this.state.displayValue} />
        <ActionButton text = "Clear" />
        <div className = "buttons">
          <div className = "buttonsLeft">
            {numberArray.map( number => {
              return (
                <NumberButton number = {number} clickHandler = {this.updateCalc} />
              )
            })}
          </div>
          <div className = "buttonsRight">
            {iconArray.map( icon => {
              return (
                <CalculationButton icon = {icon} />
              )
            })}
          </div>
        </div>
        <ActionButton text = "0" />
      </div>
    );
  };
  
}

export default App;
