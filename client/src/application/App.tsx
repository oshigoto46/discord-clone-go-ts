/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../screen/Login/LoginScreen';
import { MainScreen } from '../screen/Main/MainScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 
     {/* <BrowserRouter> */}
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={MainScreen} />
      </Switch>
    {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
