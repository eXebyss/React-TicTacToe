import React from 'react';
import Square from './Square';

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winner={this.props.winner}
        />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {[0, 1, 2].map((i) => this.renderSquare(i))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map((i) => this.renderSquare(i))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map((i) => this.renderSquare(i))}
        </div>        
      </div>
    );
  }
}
export default Board;