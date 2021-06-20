import React, { Component } from "react";
class Counter extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const myStyle = {
      backgroundColor: "red",
      fontSize: "5rem",
      // margin: " 5rem auto",
      fontWeight: "Bold",
      // height: "100vh",
      display: "grid",
      justifySelf: "center",
      gridTemplateColumns: "1fr 1fr",
      // gridGap: "10rem",
    };
    return (
      <div>
        <section style={myStyle}>
          <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-xl"
          >
            Increment
          </button>
        </section>
      </div>
    );
  }

  getBagdeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
