import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Modal from "react-bootstrap/Modal"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home/Home';
import Favorites from '../pages/favorites/favorites';
import { useEffect, useRef, useState } from 'react';
import { getCurrentConditions, getForecast } from '../../weather/accuweatherFunctions';
import { changeForecast, changeLocation, changeWeather } from '../../state-management/actions';
import logo from "../../icons/rainy-day.png"
import { useDispatch } from 'react-redux';

function App() {

  const [show, setShow] = useState(false);

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
      const telAviv = { Key: "215854", name: "Tel Aviv", img: "Tel Aviv" }
      dispatch(changeLocation(telAviv))
      const weatherPromise = new Promise((resolve, reject) => {
        resolve(getCurrentConditions(telAviv.Key))
      })
      const forecastPromise = new Promise((resolve, reject) => {
        resolve(getForecast(telAviv.Key))
      })
      Promise.all([weatherPromise, forecastPromise]).then((values) => {
        const weather = values[0]
        const forecast = values[1]
        if (typeof weather === "string" || typeof forecast === "string") {
          handleShow()
          return
        }
        dispatch(changeWeather(weather))
        dispatch(changeForecast(forecast))
      });
    })()
  }, [dispatch])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <h1 ref={headlineRef} id="navbar-headline">Ram Montilia Smithson Weather App</h1>
          </Navbar.Brand>
          <span id="toggles">
            <Button onClick={() => toggleMode()} variant="secondary" >Dark/Light</Button>
          </span>
          <Nav.Item id="links">
            <Link to="/"><Button variant="secondary">Home</Button></Link>
            <Link to="/favorites"><Button variant="secondary">Favorites</Button></Link>
          </Nav.Item>
        </Navbar>
        <Switch>
          <Route path="/favorites"><Favorites home={home} searchRef={searchRef} contentRef={contentRef} app={app} /></Route>
          <Route path="/"><Home home={home} searchRef={searchRef} contentRef={contentRef} app={app} /></Route>
        </Switch>
      </Router>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The Weather service Is Not Working At The Moment
        </Modal.Body>
        <Modal.Body>
          Please Try Again Later
        </Modal.Body>
      </Modal>

      <div ref={creditsRef} className="bg-dark text-light" id="credits">
        <div>
          <div>Weather information provided by <a href="https://developer.accuweather.com/">AccuWeather</a></div>
          <span>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
          <span> and The Tel Aviv Architecture Icon by Eynav Raphael from <a href="https://thenounproject.com/"> The Noun Project</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
