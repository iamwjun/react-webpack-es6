import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import './assets/css/styles.css';
import App from './main';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
    document.getElementById('root')
);