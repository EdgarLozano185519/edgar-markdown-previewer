import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <div role="region" aria-label="Editor">
        <h2>Editor</h2>
        <p>Edit the text below using markdown, and it should be converted to HTML.</p>
        <label for="editor">Type markdown here</label>
        <textarea id="editor" onChange={this.props.handleChange} value={this.props.input} />
      </div>
    )
  }
}

export default Editor;
