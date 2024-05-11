

export default function Square({ value, onSquareClick }) {
    console.log("value ",value);
    return (
      <div className="square" onClick={onSquareClick}>
        {value}
      </div>
      
    );
  }