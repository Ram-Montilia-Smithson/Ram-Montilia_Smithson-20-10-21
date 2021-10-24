import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home/Home';
import Favorites from '../pages/favorites/favorites';
import { useEffect, useRef } from 'react';
import { getCurrentConditions, getForecast } from '../../forecast/accuweatherFunctions';
import { changeForecast, changeLocation, changeWeather } from '../../state management/actions';
import logo from "../../icons/rainy-day.png"
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const app = useRef()
  const home = useRef()
  const searchRef = useRef()
  const headerRef = useRef()
  const creditsRef = useRef()
  const headlineRef = useRef()
  const contentRef = useRef()
  
  useEffect(() => {
    (async () => {
      const telAviv = { key: "215854", name: "Tel Aviv", img: "Tel Aviv" }
      const weather = await getCurrentConditions(telAviv.key)
      const forecast = await getForecast(telAviv.key)
      dispatch(changeWeather(weather))
      dispatch(changeLocation(telAviv))
      dispatch(changeForecast(forecast))
    })()
  }, [dispatch])
    
  const toggleMode = () => {
    app.current.classList.toggle("lightMode");
    home.current.classList.toggle("lightMode");
    searchRef.current.classList.toggle("lightMode");
    headerRef.current.classList.toggle("darkMode");
    creditsRef.current.classList.toggle("darkMode");
    headlineRef.current.classList.toggle("darkMode");
    contentRef.current.classList.toggle("contentMode");
  }
  

  return (
    <div ref={app} className="App">
      <Router>
        <Navbar ref={headerRef} className="App-header">
          <Navbar.Brand>
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle mb-2 mx-3"
              alt="React Bootstrap logo"
            />
            <h1 ref={headlineRef} id="navbar-headline">Herolo Weather Task</h1>
          </Navbar.Brand>
          <span id="toggles">
            <Button variant="secondary" ><sup>o </sup>C/F</Button>
            <Button onClick={() => toggleMode()} variant="secondary" >Dark/Light</Button>
          </span>
          <Nav.Item id="links">
            <Link to="/"><Button variant="secondary">Home</Button></Link>
            <Link to="/favorites"><Button  variant="secondary">Favorites</Button></Link>
          </Nav.Item>
        </Navbar>
        <Switch>
          <Route path="/favorites"><Favorites home={home} searchRef={searchRef} contentRef={contentRef} app={app}/></Route>
          <Route path="/"><Home home={home} searchRef={searchRef} contentRef={contentRef} app={app}/></Route>
        </Switch>
      </Router>
      <div ref={creditsRef} className="bg-dark text-light" id="credits">
        <div>Weather information provided by <a href="https://developer.accuweather.com/">AccuWeather</a></div>
        <div>
          Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          <span> and The Tel Aviv Architecture Icon by Eynav Raphael from <a href="https://thenounproject.com/"> The Noun Project</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
