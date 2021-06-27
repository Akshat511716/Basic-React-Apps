import React, { Component } from "react";
class Counter extends Component {
  state = { value: this.props.value };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBagdeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const count = this.state.value;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
