import React from 'react';
import {Switch, Route} from 'react-router-dom';
import shopPage from './page/shop/shop.component';

import './App.css';
import HomePage from './page/homepage/homepage.component.jsx'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={shopPage}/>
      </Switch>
    </div>
  );
}

export default App;
