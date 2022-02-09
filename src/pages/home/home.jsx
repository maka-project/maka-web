import React, { Component } from "react";
import "../../App.css";

class Home extends Component {
  state = {};

  componentDidMount() {
    document.getElementById("favicon").href =
      "https://runnalls.s3.eu-central-1.amazonaws.com/favicon_pending.ico";
    document.title = "MAKA: Waiting for script connection...";

    setTimeout(function () {
      document.getElementById("favicon").href =
        "https://runnalls.s3.eu-central-1.amazonaws.com/favicon_running.ico";
      document.title = "MAKA: Running Script...";
    }, 3000);
    setTimeout(function () {
      document.getElementById("favicon").href =
        "https://runnalls.s3.eu-central-1.amazonaws.com/favicon_complete.ico";
      document.title = "MAKA: Script completed successfully!";
    }, 6000);
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default Home;
