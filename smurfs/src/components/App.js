import React, { Component } from "react";

import "./App.css";
import SmurfsCard from "./SmurfsCard";
import SmurfsForm from "./SmurfsForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 ! Welcome to My Smurf Village!</h1>
        <img src={require("../imgs/HeartSmurf.jpg")} />
        <SmurfsCard />
        <SmurfsForm />
        <img src={require("../imgs/smurfsname.jpg")} />
      </div>
    );
  }
}

export default App;
