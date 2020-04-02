import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';

/**
 * @class App
 */
class App extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const history = createBrowserHistory();
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* <Navigation /> */}
            <Route exact path="/"
              component={LandingPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
