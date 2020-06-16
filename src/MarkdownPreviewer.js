import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
const marked = require('marked');

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: `
# Heading level 1  
## Heading level 2  
[Google link](http://google.com)  
Now, here is some sample code: \`const sample;\`  
\`\`\`
    const function = () => {}
    const test;
    }
\`\`\`
- Test list item

> This is a test blockquote

When you think about it, **markdown** is great!

![sample image](sample.png)
`
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({input: e.target.value})
  }
  render() {
    let md = marked(this.state.input)
    return (
      <div>
        <h1>Edgar's Simple Markdown Editor</h1>
        <Editor handleChange={this.handleChange} input={this.state.input} />
        <Previewer input={md} />
      </div>
    )
  }
}

export default MarkdownPreviewer;