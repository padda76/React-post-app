// src/js/actions/index.js

import { ADD_ARTICLE, FILL_LIST, DELETEFROMLIST } from "../constants/action-types";
import axios from "axios";

const ROOT_URL = `https://jsonplaceholder.typicode.com/posts/`;

export const saveArticle = article => {
  return (dispatch)=>{
    return axios.post(ROOT_URL,article).then((response) => {
      dispatch(addArticle(article));
    });
  }
};

export const addArticle = article => ({ 
  type: ADD_ARTICLE, 
  payload: article 
});

export const getPosts = () => {
  return (dispatch)=>{
    return axios.get(ROOT_URL).then((response) => {
      dispatch(fillList(response.data));
    });
  }
};

export const fillList = (data) => ({
  type: FILL_LIST,
  payload: data
});

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(ROOT_URL + id).then((response) => {
      dispatch(deleteFromList(id));
    });
  }
};

export const deleteFromList = (id) => ({
  type: DELETEFROMLIST,
  id
})