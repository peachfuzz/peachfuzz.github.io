import React, { Component } from "react";
import { Column, Table, Cell } from "@blueprintjs/table";

class EuclidTable extends Component {
  constructor(props) {
    super(props); //necessary for constructor
    this.state = {
      lcd: 0
    };
  }

  render() {
    var gcd, gcm;
    const renderCellQ = rowIndex => {
      return <Cell key={rowIndex}>{this.props.quotients[rowIndex]}</Cell>;
    };

    const renderCellR = rowIndex => {
      return <Cell key={rowIndex}>{this.props.remainders[rowIndex]}</Cell>;
    };
    if (
      this.props.quotients.length !== 0 ||
      this.props.remainders.length !== 0
    ) {
      if (this.props.gcm !== 0) {
        if (this.props.firstNum === this.props.secondNum) {
          gcm = (
            <p>
              The Least Common Multiple for numbers {this.props.firstNum} and{" "}
              {this.props.secondNum} is {this.props.firstNum}
            </p>
          );
        } else {
          gcm = (
            <p>
              The Least Common Multiple for numbers {this.props.firstNum} and{" "}
              {this.props.secondNum} is {this.props.gcm}
            </p>
          );
        }
      }

      if (this.props.firstNum === this.props.secondNum) {
        gcd = (
          <p>
            The Greatest Common Divisor for the numbers {this.props.firstNum}{" "}
            and {this.props.secondNum} is 1
          </p>
        );
      } else {
        gcd = (
          <p>
            The Greatest Common Divisor for the numbers {this.props.firstNum}{" "}
            and {this.props.secondNum} is {this.props.gcd}
          </p>
        );
      }
    }
    return (
      <div className="euclid-table">
        {this.props.test}
        {gcd}
        {gcm}
        <Table
          className="euclidTable"
          defaultRowHeight={40}
          defaultColumnWidth={90}
          numRows={this.props.quotients.length}
        >
          <Column key="Q" name="Quotient" cellRenderer={renderCellQ} />
          <Column key="R" name="Remainder" cellRenderer={renderCellR} />
        </Table>
      </div>
    );
  }
}

export default EuclidTable;
