import React, { Component } from "react";

class EuclidTable extends Component {
  constructor(props) {
    super(props); //necessary for constructor
    this.getLcd = this.getLcd.bind(this);
    this.state = {
      lcd: 0
    };
  }

  getLcd() {
    // this.setState((props) => ({ //this doesn't work at all...
    //     lcd: props.first
    // }));
    this.setState({
      //this works but it happens too late...
      lcd: this.props.first
    });
  }

  componentDidMount() {
    this.getLcd();
  }

  //https://codepen.io/gaearon/pen/QKzAgB?editors=0010
  //https://codepen.io/gaearon/pen/amqdNA?editors=0010

  render() {
    return (
      <div className="euclid-table">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Quotient</th>
              <th>Remainder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.first}</td>
              <td>{this.props.second}</td>
              <td>{this.state.lcd}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EuclidTable;
