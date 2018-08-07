import React, { Component } from 'react';
import data from './comments.json';
import Comment from './Comment';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.commentBuild = this.commentBuild.bind(this)
  }

  commentBuild(data) {
    return data.map(e => {
      if(e.subComments) {
        return (
          <Comment data={ e } key={ e.id }>
            { this.commentBuild(e.subComments) }
          </Comment>
        )
      } else {
        return <Comment data={ e } key={ e.id }/>
      }
    })
  }

  render() {
    const comments = this.commentBuild(data);
    return (
      <div>
        <h1>Comment Board</h1>
        { comments }
      </div>
    );
  }
}

export default App;
