import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home/Home';
import Favorites from '../pages/favorites/favorites';
// import {useSelector, useDispatch} from 'react-redux';
// import { changeDegrees, changeLocation, changeMode } from '../../state management/actions';
// import { changeWeather } from "../../state management/actions"

function App() {

  // const location = useSelector(state => state.location)
  // () => dispatch(changeLocation())
  // const mode = useSelector(state => state.mode)
  // () => dispatch(changeMode(mode))
  // const degrees = useSelector(state => state.degrees)
  // () => dispatch(changeDegrees(degrees))
  // const dispatch = useDispatch()

  // console.log(degrees, mode);

  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <h1>Herolo Weather Task</h1>
          {/* <div>location {location}</div> */}
          {/* <button >change location</button> */}
          <div id="buttons">
            <span id="toggles">
              <Button ><sup>o </sup>C/F</Button>
              <Button >Dark/Light</Button>
            </span>
            <span id="links">
              <Link to="/"><Button>Home</Button></Link>
              <Link to="/favorites"><Button>Favorites</Button></Link>
            </span>
        </div>
      </header>
          <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
            <Route path="/"><Home/></Route>
          </Switch>
      </Router>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
