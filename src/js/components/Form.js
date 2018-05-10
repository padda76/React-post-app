// src/js/components/Form.js

import React, { Component } from "react";
import { connect } from "react-redux";

import { saveArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article => dispatch(saveArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { body } = this.state;
    this.props.saveArticle({ title, body });
    this.setState({ title: "", body: "" });
  }

  render() {
    const { body } = this.state;
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />

          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            value={body}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;