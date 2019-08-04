import React, { Component } from "react";
import Button from "./atoms/button";

class Home extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <h1>I am home!</h1>
        <Button>Test</Button>
      </div>
    );
  }
}

export default Home;
