import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container"
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
        <Container></Container>
    </div>
  );
}

export default App;
