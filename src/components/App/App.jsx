import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from 'components/pages/Home/Home';
import Favorites from 'components/pages/Favorites/Favorites';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>Herolo Weather Task</h1>
        <div id="buttons">
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/favorites">Favorites</Link>
              </Button>
        </div>
      </header>
          <Switch>
            <Route path="/favorites"><Favorites/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
