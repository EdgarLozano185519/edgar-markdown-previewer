import React from 'react';

class Previewer extends React.Component {
  render() {
    return (<div role="region" aria-label="Previewer">
      <h2>Previewer</h2>
      <p>Your rendered markdown is below.</p>
      <hr />
      <div id="preview" dangerouslySetInnerHTML={{__html: this.props.input}} />
    </div>)
  }
}

export default Previewer;
