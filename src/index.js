import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// aws stuff
// import awsMobile from "./aws-exports";
// import Amplify from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react";
// Amplify.configure(awsMobile);
// const AppWithAuth = withAuthenticator(App);

ReactDOM.render(<App />, document.getElementById("root")); //for no login
//ReactDOM.render(<AppWithAuth />, document.getElementById('root')); //for login

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

//what didn't work
//import registerServiceWorker from './registerServiceWorker'; //I got this from here: https://medium.com/capgemini-norway/hosting-your-react-application-with-aws-in-30-minutes-623f6539d92d
//registerServiceWorker(); //I got this from here: https://medium.com/capgemini-norway/hosting-your-react-application-with-aws-in-30-minutes-623f6539d92d

// serviceWorker.unregister(); //this works, not sure what it means 😭🤨
