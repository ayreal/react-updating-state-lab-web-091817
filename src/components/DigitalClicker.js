import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
      // ++ increments FIRST then does the operation
    });
  };

  render() {
    return (
      <button className="" onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
