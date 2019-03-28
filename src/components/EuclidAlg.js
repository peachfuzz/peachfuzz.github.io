import React, { Component } from "react";
import { Column, Table, Cell } from "@blueprintjs/table";

class EuclidAlg extends Component {
  constructor() {
    super(); //necessary for constructor
    this.state = {
      firstNum: 1,
      secondNum: 1,
      gcd: 1,
      gcm: 0,
      quotients: [],
      remainders: [],
      i: 0
    };
    this.calcEuclid = this.calcEuclid.bind(this); //for making functions to call other functions outside of this component
    this.calcGcm = this.calcGcm.bind(this);
  }

  calcGcm() {
    this.setState(state => ({
      gcm: (state.firstNum * state.secondNum) / state.gcd
    }));
  }

  calcEuclid(e) {
    e.preventDefault(); //required to prevent the page from loading again
    this.setState(state => ({
      gcm: 0
    }));
    var firstCalc = parseInt(document.getElementById("first").value);
    var secondCalc = parseInt(document.getElementById("second").value);
    if (Number.isNaN(firstCalc)) {
      //I should find a better alternative to this...
      firstCalc = 1;
    }
    if (Number.isNaN(secondCalc)) {
      //I should find a better alternative to this...
      secondCalc = 1;
    }
    this.setState({
      firstNum: firstCalc,
      secondNum: secondCalc
    });
    var remainder = [firstCalc % secondCalc];
    var quotient = [(firstCalc - remainder[0]) / secondCalc];
    this.setState({
      quotients: [],
      remainders: []
    });
    var index = 0;
    while (remainder[index] > 0) {
      firstCalc = secondCalc;
      secondCalc = remainder[index];
      remainder = remainder.concat(firstCalc % secondCalc);
      quotient = quotient.concat(
        (firstCalc - remainder[index + 1]) / secondCalc
      );
      index++;
    }
    this.setState({
      quotients: quotient,
      remainders: remainder
    }); //set the state once at the end
    if (index === 0) {
      this.setState({
        gcd: quotient[index]
      });
    } else {
      this.setState({
        gcd: remainder[index - 1]
      });
    }
    if (document.getElementById("gcm").checked === true) {
      this.calcGcm();
    }
  }
  renderCellQ = rowIndex => {
    return <Cell key={rowIndex}>{this.state.quotients[rowIndex]}</Cell>;
  };

  renderCellR = rowIndex => {
    return <Cell key={rowIndex}>{this.state.remainders[rowIndex]}</Cell>;
  };
  render() {
    var gcd, gcm;
    const renderCellQ = rowIndex => {
      return <Cell key={rowIndex}>{this.state.quotients[rowIndex]}</Cell>;
    };

    const renderCellR = rowIndex => {
      return <Cell key={rowIndex}>{this.state.remainders[rowIndex]}</Cell>;
    };
    if (
      this.state.quotients.length !== 0 ||
      this.state.remainders.length !== 0
    ) {
      if (this.state.gcm !== 0) {
        if (this.state.firstNum === this.state.secondNum) {
          gcm = (
            <p>
              The Least Common Multiple for numbers {this.state.firstNum} and{" "}
              {this.state.secondNum} is {this.state.firstNum}
            </p>
          );
        } else {
          gcm = (
            <p>
              The Least Common Multiple for numbers {this.state.firstNum} and{" "}
              {this.state.secondNum} is {this.state.gcm}
            </p>
          );
        }
      }

      if (this.state.firstNum === this.state.secondNum) {
        gcd = (
          <p>
            The Greatest Common Divisor for the numbers {this.state.firstNum}{" "}
            and {this.state.secondNum} is 1
          </p>
        );
      } else {
        gcd = (
          <p>
            The Greatest Common Divisor for the numbers {this.state.firstNum}{" "}
            and {this.state.secondNum} is {this.state.gcd}
          </p>
        );
      }
    }

    return (
      <div className="euclid">
        <h1>Euclidean Algorithm</h1>
        <p className="small-text">
          note: if you don't enter a number, the default values for both numbers
          are 1
        </p>
        <form onSubmit={this.calcEuclid}>
          <input type="checkbox" name="gcm" value="gcm" id="gcm" />
          <label htmlFor="gcm">Calculate Least Common Multiple</label>
          <br />
          <br />
          <input id="first" type="number" />
          <br />
          <input id="second" type="number" />
          <br />
          <input
            type="submit"
            value="Greatest Common Divisor"
            onClick={this.calcEuclid}
          />
          {/* <EuclidTable ref={this.euclidTable} first={this.state.first} second={this.state.second}/> */}
        </form>
        <br />
        {gcd}
        {gcm}
        <Table
          className="euclidTable"
          defaultRowHeight={40}
          defaultColumnWidth={90}
          numRows={this.state.quotients.length}
        >
          <Column key="Q" name="Q" cellRenderer={renderCellQ} />
          <Column key="R" name="R" cellRenderer={renderCellR} />
        </Table>
        <br />
        <p>
          Learn more about the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Euclidean_algorithm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Euclidean Algorithm
          </a>
        </p>
        <p>
          Take a look at{" "}
          <a
            href="https://github.com/peach-fuzz/garden/blob/master/src/components/EuclidAlg.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            the code
          </a>
        </p>
      </div>
    );
  }
}

export default EuclidAlg;
