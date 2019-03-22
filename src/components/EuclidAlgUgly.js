import React, { Component } from "react";
// import EuclidTable from './EuclidTable';

class EuclidAlgUgly extends Component {
  constructor() {
    super(); //necessary for constructor
    this.state = {
      first: 0,
      second: 0,
      lcd: 0,
      index: -1
    };
    this.submitNums = this.submitNums.bind(this); //for making functions
    this.calcEuclid = this.calcEuclid.bind(this);
    //this.euclidTable = React.createRef(); //to call other functions outside of this component
  }

  submitNums() {
    const firstSub = document.getElementById("first").value;
    const secondSub = document.getElementById("second").value;
    this.setState({
      first: firstSub,
      second: secondSub,
      lcd: parseInt(firstSub) + parseInt(secondSub),
      index: this.state.index + 1
    });

    // console.log("submitNums called");
    //this.euclidTable.current.getLcd(); //calling functions outside of this component
    this.calcEuclid();
  }

  calcEuclid() {
    var firstCalc = document.getElementById("first").value;
    var secondCalc = document.getElementById("second").value;
    var quotient = 0;
    var k = 0;
    var remainder = firstCalc % secondCalc;
    quotient = (firstCalc - remainder) / secondCalc;
    var div = document.getElementById("euclid-table");
    div.innerHTML = "";

    var table = document.createElement("TABLE");
    var thead = document.createElement("THEAD");
    var trh = document.createElement("TR");
    var th = document.createElement("Th");
    var text = document.createTextNode("k");
    th.appendChild(text);
    trh.appendChild(th);

    th = document.createElement("Th");
    text = document.createTextNode("q");
    th.appendChild(text);
    trh.appendChild(th);

    th = document.createElement("Th");
    text = document.createTextNode("r");
    th.appendChild(text);
    trh.appendChild(th);
    thead.appendChild(trh);
    table.appendChild(thead);

    var tr = document.createElement("TR");

    //do this 3 times
    var td = document.createElement("TD");
    text = document.createTextNode(k);
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement("TD");
    text = document.createTextNode(quotient);
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement("TD");
    text = document.createTextNode(remainder);
    td.appendChild(text);
    tr.appendChild(td);

    table.appendChild(tr);

    //output firstCalc, secondCalc, quotient, k to table
    while (remainder > 0) {
      firstCalc = secondCalc;
      secondCalc = remainder;
      remainder = firstCalc % secondCalc;
      quotient = (firstCalc - remainder) / secondCalc;
      k++;
      //output firstCalc, secondCalc, quotient, k to table
      var trtr = document.createElement("TR");
      td = document.createElement("TD");
      text = document.createTextNode(k);
      td.appendChild(text);
      trtr.appendChild(td);

      td = document.createElement("TD");
      text = document.createTextNode(quotient);
      td.appendChild(text);
      trtr.appendChild(td);

      td = document.createElement("TD");
      text = document.createTextNode(remainder);
      td.appendChild(text);
      trtr.appendChild(td);

      table.appendChild(trtr);
    }
    div.appendChild(table);
  }

  render() {
    return (
      <div className="euclid">
        <h1>Euclidean Algorithm</h1>
        <form>
          <input id="first" type="number" />
          <br />
          <input id="second" type="number" />
          <br />
          <input
            type="button"
            value="Greatest Common Divisor"
            onClick={this.submitNums}
          />
          <div id="euclid-table">
            {/* <thead>
                <tr>
                    <th>Index</th>
                    <th>Quotient</th>
                    <th>Remainder</th>
                </tr>
            </thead>
             */}
          </div>
          <a
            href="https://github.com/peach-fuzz/garden/blob/master/src/components/EuclidAlgUgly.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take a look at the code
          </a>
          {/* <EuclidTable ref={this.euclidTable} first={this.state.first} second={this.state.second}/> */}
        </form>
      </div>
    );
  }
}

export default EuclidAlgUgly;