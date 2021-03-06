import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import CreateGateway from './components/CreateGateway';

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
      <div className="overview_page">
        <Router history={history}>
          <Navigation />
          <Switch>
            {/* <Navigation /> */}
            <Route exact path="/"
              component={LandingPage}
            />
            <Route exact path="/create-gateway"
              component={CreateGateway}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
