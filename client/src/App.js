import React, { Component } from 'react';
import './App.css';

import Articleapp from './components/article'
import { Provider } from 'react-redux';

import { store } from "./Store/Store"
class App extends Component {



  render() {
      return (
          <Provider store={store}>
            <div className="App">
     
            <Articleapp />
       

             </div>
          </Provider>
    );
  }
}

export default App;
