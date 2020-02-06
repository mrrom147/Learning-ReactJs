import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/homepage.component";
import Shop from "./pages/shop.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </div>
      </Router>
    );
  }
}

export default App;
