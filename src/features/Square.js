function Square(props) {

  return (
    <button 
      className="square" 
      onClick={props.onClick}
      style={props.winnerStyleBackgroundColor}>
      {props.value}
    </button>
  );
}

export default Square;