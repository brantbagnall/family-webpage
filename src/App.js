import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.css';
import Landing from './components/Landing';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <div>
            <Route exact path='/' component={Landing} />
            <Route path='/blog' component={Blog} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
