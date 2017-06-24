import React, {
  Component,
  PropTypes,
} from 'react';

import img from '../logo.svg';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React 18 </h2>
          <img src={img} />
          {}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

