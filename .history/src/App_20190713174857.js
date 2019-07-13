import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container"
import TeamDetails from "./components/TeamDetails"
import { Switch, Route } from 'react-router-dom'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/team/:id' component={TeamDetails}/>
    </Switch>
  </main>
)

function App() {
  return (
    <div className="App">
        <Main></Main>
    </div>
  );
}

export default App;
