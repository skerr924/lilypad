import React from "react";

export default class Searchbar extends React.Component {
  state = {
    term: "Default text",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Search Youtube!</label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
