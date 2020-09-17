import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PATH } from './Route'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={PATH.empty} render={() => <Redirect to={PATH.home} />} />
        <Route exact path={PATH.home} render={() => <div>Home</div>}/>
        <Route render={() => <div>Error</div>} />
      </Switch>
    </div>
  );
}

export default App;
