import React from "react";
import ReactDOM from "react-dom";

class StateIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: false
    };
  }

  pressHandler() {
    this.setState({
      toggleState: !this.state.toggleState
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.toggleState ? "red" : "green",
          width: 300,
          height: 300,
          lineHeight: "300px",
          textAlign: "center"
        }}
        onClick={this.pressHandler.bind(this)}
      >
        click me!
      </div>
    );
  }
}

ReactDOM.render(<StateIntro />, document.getElementById("root"));