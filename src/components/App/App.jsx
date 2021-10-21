import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home/Home';
// import Favorites from '../pages/Favorites/Favorites';
import Test from '../test';


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
          <Route path="/favorites">
            {/* <Favorites /> */}
            {/* <h1>Favorites</h1> */}
            <Test/>
          </Route>
            <Route path="/"><Home/></Route>
          </Switch>
      </Router>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
