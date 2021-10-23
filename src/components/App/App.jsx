import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home/Home';
import Favorites from '../pages/favorites/favorites';
import { useEffect } from 'react';
import { getCurrentConditions, getForecast } from '../../forecast/accuweatherFunctions';
import { changeForecast, changeLocation, changeWeather } from '../../state management/actions';
import { useDispatch } from 'react-redux';
import logo from "../../icons/rainy-day.png"
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
  const dispatch = useDispatch()



  useEffect(() => {
    (async () => {
      const telAviv = { key: "215854", name: "Tel Aviv" }
      const weather = await getCurrentConditions(telAviv.key)
      const forecast = await getForecast(telAviv.key)
      dispatch(changeWeather(weather))
      dispatch(changeLocation(telAviv))
      dispatch(changeForecast(forecast))
    })()
    return () => {

    }
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" className="App-header">
          <Navbar.Brand>
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle mb-2 mx-3"
              alt="React Bootstrap logo"
            />
            <h1 id="navbar-headline">Herolo Weather Task</h1>
          </Navbar.Brand>
          {/* <div>location {location}</div> */}
          {/* <button >change location</button> */}
          <span id="toggles">
            <Button variant="secondary" ><sup>o </sup>C/F</Button>
            <Button variant="secondary" >Dark/Light</Button>
          </span>
          <Nav.Item id="links">
            <Link to="/"><Button variant="secondary">Home</Button></Link>
            <Link to="/favorites"><Button variant="secondary">Favorites</Button></Link>
          </Nav.Item>
        </Navbar>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
      <div className="bg-dark text-light" id="credits">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
