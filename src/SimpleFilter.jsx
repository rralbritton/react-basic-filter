import React, { Component } from "react";

/*The UL list that gets rendered could be replaced with a table */

export default class SimpleFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      exampleList: ["One", "Two", "Three", "Four"] //replace with props and make a call to a server
    };
  }

  //The subsr limits the # of characters a user can enter into the seach box
  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 10) });
  };

  render() {
    let filteredList = this.state.exampleList.filter(item => {
      return item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Enter Text Here..."
          className="form-control"
          aria-describedby="searchbox"
        />
        <ul>
          {filteredList.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
