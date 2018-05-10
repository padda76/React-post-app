// src/js/reducers/index.js

import { ADD_ARTICLE, FILL_LIST, DELETEFROMLIST } from "../constants/action-types";
import axios from "axios";

const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case FILL_LIST:
      return { ...state, articles: [...state.articles, ...action.payload] };
    case DELETEFROMLIST:
      console.log(state.articles[action.id-1].id == action.id);
      return { ...state, articles: state.articles.filter((post) => post.id != action.id)};
    default:
      return state;
  }
};

export default rootReducer;