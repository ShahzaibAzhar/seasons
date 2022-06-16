import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //p1
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  //p2
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit} //p2
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   this.props.onSubmit(this.state.term);
          // }}
          className="ui form"
        >
          <div className="field">
            <label>image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              //onChange={this.onInputChange}  p1
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
