import React from 'react';
import Square from "../Square/index"
import './board.css'

const Board = ({squares, onClick}) => {
    const Board = squares.map((square, i) => 
        <Square key={i} value = {square} onClick = {()=>onClick(i)}/>
)
    return (
        <div className = "board">
            {Board}
        </div>
    );
};

export default Board;