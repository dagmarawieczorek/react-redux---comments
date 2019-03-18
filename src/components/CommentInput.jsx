import React, { Component } from "react";

import { addComment } from "../actions/actions";
import store from "../store/store";

export default class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  addCommentt = () => {
    store.dispatch(addComment(this.state.text));
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.addCommentt}>Add</button>
      </div>
    );
  }
}
