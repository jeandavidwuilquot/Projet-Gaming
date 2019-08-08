import React from 'react';
import './App.css';
import LinkTo from './components/link'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from './components/recherche'

function App() {
  return (
    <div className="App">
      <Router className="App-header">
        <div>
          <LinkTo to="/Accueil"/>
          <LinkTo exact={true} to="/"/>
          <Route exact path="/" component={Home} />
          <Route path="/Accueil" component={Accueil} />
        </div>
      </Router>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>azodnaod</h1>
    </div>
  )
}

export default App;
