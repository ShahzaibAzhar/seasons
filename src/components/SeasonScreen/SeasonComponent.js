import React from "react";
import "./SeasonComponent.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class Season extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    console.log("component MOUNTED");
    window.navigator.geolocation.getCurrentPosition(
      (post) => {
        this.setState({ lat: post.coords.latitude });
        console.log(post);
      },
      (err) => {
        this.setState({ errMsg: err.message });
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    console.log("Component UPDATED");
  }

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div className="App"> Error: {this.state.errMsg}</div>;
    }
    if (!this.state.err && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Pleas allow location" />;
  }

  render() {
    return <div className="">{this.renderContent()}</div>;
  }
}

export default Season;
