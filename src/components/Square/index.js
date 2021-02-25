import React from 'react';
import './squareStyle.css';


const Square = ({onClick, value}) => {
    return (
        <button className = "square" onClick = {onClick} >
            {value}
        </button>
    );
};

export default Square;