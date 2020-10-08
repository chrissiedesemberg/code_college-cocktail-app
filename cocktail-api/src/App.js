import React, { Component } from "react";
import Cocktails from "./Cocktails";
import Github from "./Github";
import UserForm from "./UserForm";

class App extends Component {
  render() {
    return (
      <div style={main.header}>
        <h4>Welcome to the </h4>
        <h1>The Drink Station</h1>
        <h4>Search a drink and get the instructions</h4>
        <Cocktails />
      </div>
    );
  }
}
export default App;

const main = {
  header: {
    backgroundColor: "rgb(42,42,45)",
    padding: "10px",
    color: "white",
    textAlign: "center",
  },
};
