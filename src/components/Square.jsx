function Square(props) {
  let color;
  if (props.winner) {
    if (props.winner === "X" && props.value === "X") {
      color = { color: "green", backgroundColor: "yellowgreen" };
    } else if (props.winner === "O" && props.value === "O") {
      color = { color: "orange", backgroundColor: "yellow" };
    }
  }

  return (
    <button className="square" onClick={props.onClick} style={color}>
      {props.value}
    </button>
  );
}

export default Square;
