// import './Board.css'
import { useState } from 'react'
import Square from './Square';


export default function Board() {

    const [box, setBox] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(box) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (box[a] && box[a] === box[b] && box[a] === box[c]) {
                return box[a];
            }
        }
        return null;
    }


    const winner = calculateWinner(box);
    let status;
    if (winner) {
        status = "Winner : " + winner;
    }
    else {
        status = "Next Move : " + (xIsNext ? "X" : "O");
    }



    function handleClick(i) {
        if (box[i] || calculateWinner(box)) {
            return;
        }
        const nextSquares = box.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        setBox(nextSquares);
        setXIsNext(!xIsNext);
        console.log(nextSquares)
        console.log("xIsNext = ", xIsNext);
    }




    return (
        <>
            <div className="container">
                <div className="status">{status}</div>
                <div className="game-board">
                    <div className="board-row">
                        <Square value={box[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={box[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={box[2]} onSquareClick={() => handleClick(2)} />
                    </div>

                    <div className="board-row">
                        <Square value={box[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={box[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={box[5]} onSquareClick={() => handleClick(5)} />
                    </div>

                    <div className="board-row">
                        <Square value={box[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={box[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={box[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>

            </div>
        </>
    )
}