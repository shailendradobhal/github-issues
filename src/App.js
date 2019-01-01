import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';
import Main from './container/Main';
import IssueDetailPage from './container/IssueDetailPage';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/issues/" component={Main} />
              <Route path="/issues/:issueId" component={IssueDetailPage} />
              <Redirect to="/issues/" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
