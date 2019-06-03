import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className = "calcDisplay">
            <p className = "displayTotal">
               {props.value}
            </p>
        </div>
    );
};

export default CalculatorDisplay;