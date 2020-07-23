import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Example from "./example";
import Pattern1 from "./pattern-1";
import Pattern2 from "./pattern-2";
import Pattern3 from "./pattern-3";
import Pattern4 from "./pattern-4";

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
                <Link to="/pattern-1">
                  <span role="img" aria-label={""}>
                    ✔️
                  </span>
                  Pattern 1
                </Link>
              </li>
              <li>
                <Link to="/pattern-2">
                  <span role="img" aria-label={""}>
                    ✔️
                  </span>
                  Pattern 2
                </Link>
              </li>
              <li>
                <Link to="/pattern-3">
                  <span role="img" aria-label={""}>
                    ✔️
                  </span>
                  Pattern 3
                </Link>
              </li>
              <li>
                <Link to="/pattern-4">
                  <span role="img" aria-label={""}>
                    ✔️
                  </span>
                  Pattern 4
                </Link>
              </li>
              <li>
                <Link to="/pattern-5">
                  Pattern 5
                </Link>
              </li>
              <li>
                <Link to="/pattern-6">
                  Pattern 6
                </Link>
              </li>
              <li>
                <Link to="/pattern-7">
                  Pattern 7
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact>
              <Example />
            </Route>
            <Route path="/pattern-1">
              <Pattern1 />
            </Route>
            <Route path="/pattern-2">
              <Pattern2 />
            </Route>
            <Route path="/pattern-3">
              <Pattern3 />
            </Route>
            <Route path="/pattern-4">
              <Pattern4 />
            </Route>
            <Route path="/pattern-5">
              <p>in progress</p>
            </Route>
            <Route path="/pattern-6">
              <p>in progress</p>
            </Route>
            <Route path="/pattern-7">
              <p>in progress</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
