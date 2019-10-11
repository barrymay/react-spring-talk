import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import { Demo1 } from "./demos/demo1/Demo1";
import { Demo2 } from "./demos/demo2/Demo2";
import { Demo21 } from "./demos/demo2.1/Demo21";
import { Demo3 } from "./demos/demo3/Demo3";
import { Demo4 } from "./demos/demo4/Demo4";
// import { Demo5 } from "./demos/demo5/Demo5";

function App() {
  return (
    <div className="App">
      <div className="app-links">
        <Link className="App-link" to="demo1">
          Demo 1
        </Link>
        <Link className="App-link" to="demo2">
          Demo 2
        </Link>
        <Link className="App-link" to="demo21">
          Demo 2.1
        </Link>
        <Link className="App-link" to="demo3">
          Demo 3
        </Link>
        <Link className="App-link" to="demo4">
          Demo 4
        </Link>
        {/*<Link className="App-link" to="demo5">
          Demo 5
        </Link> */}
      </div>
      <div className="app-content">
        <Router>
          <Home path="/" />
          <Demo1 path="demo1" />
          <Demo2 path="demo2" />
          <Demo21 path="demo21" />
          <Demo3 path="demo3" />
          <Demo4 path="demo4" />
          {/* <Demo5 path="demo5" /> */}
        </Router>
      </div>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Select a link above</h2>
  </div>
);

export default App;
