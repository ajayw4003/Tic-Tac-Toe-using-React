import React, { useState }  from 'react';
import Board from "../Board/Board";
import { calculateWinner } from "../../helper";
import './game.css';



const Game = ()=>{
    const [board, setBoard] = useState(Array(9).fill(null))
    const [XisNext, setXIsNext] = useState(true)
    const [draw, setDraw] = useState("");
    const winner = calculateWinner(board)
    const handleClick = (event) =>{
        const boardCopy = [...board]
        //if user click on occupied square or won then return
        if(winner || boardCopy[event]) return;
        //put X or O on clicked square
        boardCopy[event] = XisNext ? 'X': 'O'
        setBoard(boardCopy)
        setXIsNext(!XisNext)

        const isFull = boardCopy.some(element => element === null)
        if(isFull !== true && winner === false){
            setDraw("Match ended in draw")
            return;
        }
      
    }

    const ResetGame = ()=>{
        setBoard(Array(9).fill(null))
        setDraw("");
        setXIsNext(true)
    }

    return(
        <div>
            <Board squares= {board} onClick = {handleClick}/>
            <h1>{winner ? `Player ` + winner + ` win`: `Player ` + (XisNext ? 'X': 'O')+ ` turn`}</h1>
            <h1>{winner? "" : draw}</h1>
            <button className="reset" onClick = {ResetGame}>Reset Game</button>
        </div>
    )
}
export default Game;
