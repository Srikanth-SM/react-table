import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
let persons = [
  {
    name: "abacus",
    description: "Software engineer",
    age: 25
  },
  {
    name: "b",
    description: "civil engineer",
    age: 28
  },
  {
    name: "c",
    description: "deputy civil engineer",
    age: 30
  },
  {
    name: "dravid",
    description: "engineer",
    age: 38
  },
  {
    name: "sachin",
    description: "cricket player",
    age: 40
  },
  {
    name: "dhoni",
    description: "cricket player",
    age: 37
  }
];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const list = [];
for (let index = 0; index < 20; index++) {
  let s = getRandomInt(persons.length);
  list.push(persons[s]);
}

ReactDOM.render(<App list={list} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
