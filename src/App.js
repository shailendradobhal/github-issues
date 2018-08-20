import React, { Component } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>  
        </Provider>
      </div>
    );
  }
}

export default App;
