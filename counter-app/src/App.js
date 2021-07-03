import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/counters";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </>
    );
  }
}

export default App;
