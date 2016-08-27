import React, { Component } from 'react';
import Main from './components/main';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Form from './components/form';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Welcome}/ >
          <Route path="welcome" component={Welcome}/>
          <Route path="hello" component={Hello}/>
          <Route path="form" component={Form}/>
        </Route>
      </Router>
    );
  };
}

export default App;
