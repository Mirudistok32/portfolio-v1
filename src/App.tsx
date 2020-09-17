import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PATH } from './Route'
import './App.scss';
import { Home } from './components/Home/Home';
import { ErrorPath } from './components/utils/ErrorPath/ErrorPath'

function App() {
  return (
    <div className="app">
      <div className="app__wrap">
        <div className="app__content">
          <Switch>
            <Route exact path={'/'} render={() => <Redirect to={PATH.home} />} />
            <Route exact path={PATH.home} render={() => <Home />} />

            <Route render={() => <ErrorPath children={'Error path!'} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
