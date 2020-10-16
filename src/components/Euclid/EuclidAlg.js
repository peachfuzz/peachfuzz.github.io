import React, { Component } from "react";
import EuclidTable from "./EuclidTable";
import {
    NumericInput,
    Button,
    Checkbox,
    Divider,
    Icon,
    H1
} from "@blueprintjs/core";
import { IoIosCalculator } from "react-icons/io";
class EuclidAlg extends Component {
    constructor() {
        super(); //necessary for constructor
        this.state = {
            firstNum: 1,
            secondNum: 1,
            gcd: 1,
            gcm: 0,
            quotients: [],
            remainders: []
        };
        this.calcEuclid = this.calcEuclid.bind(this); //for making functions to call other functions outside of this component
        this.calcGcm = this.calcGcm.bind(this);
    }

    calcGcm() {
        this.setState((state) => ({
            gcm: (state.firstNum * state.secondNum) / state.gcd
        }));
    }

    calcEuclid(e) {
        e.preventDefault(); //required to prevent the page from loading again
        this.setState((state) => ({
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
    render() {
        return (
            <div className="euclid top">
                <H1>Euclidean Algorithm</H1>
                <IoIosCalculator
                    alt="Calculator"
                    className="icon-calc"
                    size={50}
                />
                <p className="small-text">
                    note: if you don't enter a number, the default values for
                    both numbers are 1
                </p>
                <form onSubmit={this.calcEuclid}>
                    <Checkbox
                        htmlFor="gcm"
                        label="Calculate Least Common Multiple"
                        id="gcm"
                    />
                    <NumericInput
                        id="first"
                        text="Enter a number.."
                        type="number"
                        leftIcon="numerical"
                        min={1}
                        className="center"
                    />
                    <p />
                    <NumericInput
                        id="second"
                        text="Enter another number.."
                        type="number"
                        leftIcon="numerical"
                        min={1}
                        className="center"
                    />
                    <p />
                    <Button
                        type="submit"
                        text="Greatest Common Divisor"
                        onClick={this.calcEuclid}
                    />
                </form>
                <p />
                <Divider />
                <EuclidTable
                    firstNum={this.state.firstNum}
                    secondNum={this.state.secondNum}
                    gcd={this.state.gcd}
                    gcm={this.state.gcm}
                    quotients={this.state.quotients}
                    remainders={this.state.remainders}
                />
                <Divider />
                <p />
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
                        href="https://github.com/peachfuzz/peachfuzz.github.io/blob/source/src/components/Euclid/EuclidAlg.js"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        the code <Icon icon="code" />
                    </a>
                </p>
            </div>
        );
    }
}

export default EuclidAlg;
