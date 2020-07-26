import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Example from "./example";
import Pattern1 from "./pattern-1";
import Pattern2 from "./pattern-2";
import Pattern3 from "./pattern-3";
import Pattern4 from "./pattern-4";
import Pattern5 from "./pattern-5";
import Pattern6 from "./pattern-6";
import Pattern7 from "./pattern-7";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <h1>
              Seven patterns by example: The many ways to <b>`type="radio"`</b>
              in React
            </h1>
            <section>
              <img
                alt={""}
                width="214"
                height="35"
                src="https://miro.medium.com/max/428/1*3NiECPFgYaHEq6D7bAAZ1A.jpeg"
              />
            </section>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://techblog.commercetools.com/seven-patterns-by-example-the-many-ways-to-type-radio-in-react-bfe14322bb6f"
            >
              read more
            </a>
          </section>
          <nav>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <Link to="/pattern-1">Pattern 1</Link>
              </li>
              <li>
                <Link to="/pattern-2">Pattern 2</Link>
              </li>
              <li>
                <Link to="/pattern-3">Pattern 3</Link>
              </li>
              <li>
                <Link to="/pattern-4">Pattern 4</Link>
              </li>
              <li>
                <Link to="/pattern-5">Pattern 5</Link>
              </li>
              <li>
                <Link to="/pattern-6">Pattern 6</Link>
              </li>
              <li>
                <Link to="/pattern-7">Pattern 7</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact>
              <Example />
            </Route>
            <Route path="/pattern-1">
              <h2>Pattern 1 - Defining RadioGroup and an options argument</h2>
              <Pattern1 />
            </Route>
            <Route path="/pattern-2">
              <h2>
                Pattern 2 - Defining RadioGroup and RadioOption components
              </h2>
              <Pattern2 />
            </Route>
            <Route path="/pattern-3">
              <h2>Pattern 3 - Compound components through RadioGroup</h2>
              <Pattern3 />
            </Route>
            <Route path="/pattern-4">
              <h2>
                Pattern 4 - A shared `context` for RadioGroup and RadioOption
              </h2>
              <Pattern4 />
            </Route>
            <Route path="/pattern-5">
              <h2>Pattern 5 - RadioGroup with Function as a Child (FaaC)</h2>
              <Pattern5 />
            </Route>
            <Route path="/pattern-6">
              <h2>Pattern 6 - RadioGroup with prop getters for RadioOption</h2>
              <Pattern6 />
            </Route>
            <Route path="/pattern-7">
              <h2>Pattern 7 - RadioGroup dynamically creates RadioOption</h2>
              <Pattern7 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
