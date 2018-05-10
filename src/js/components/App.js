// src/js/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div className="row">
    <div className="col-md-8">
      <h2>Posts</h2>
      <List />
    </div>
    <div className="col-md-4">
      <h2>Add a new post</h2>
      <Form />
    </div>
  </div>
);

export default App;