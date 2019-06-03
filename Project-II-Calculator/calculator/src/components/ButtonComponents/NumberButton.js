import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button 
        className = "numberBtns"
        onClick={() => props.clickHandler(props.number)}
        >
        {props.number}
        </button>
    );
};

export default NumberButton;