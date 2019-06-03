import React from 'react';
import './Button.css';

const CalculationButton = props => {
    return(
        <button
        className = "calcButtons"
        >
         {props.icon}
        </button>
    );
};

export default CalculationButton;