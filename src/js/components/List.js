// src/js/components/List.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../actions/index";
import FontAwesome from "react-fontawesome";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

class ConnectedList extends Component {
  constructor(){
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onDelete(e){
    console.log(e.target.id);
    this.props.deletePost(e.target.id);
  }
  
  render(){
    return(
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            <FontAwesome onClick={this.onDelete} name='trash-alt' id={el.id} />
            <strong>{el.title}</strong><br />
            <small>{el.body}</small>
          </li>
        ))}
      </ul>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;