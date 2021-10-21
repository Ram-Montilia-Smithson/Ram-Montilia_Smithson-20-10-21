import React from 'react'
import "./Home.css"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
// import {heart} from ""
import { useSelector } from 'react-redux';

function Home() {

    const degrees = useSelector(state => state.degrees)

    const success = (position) => {
        console.log(position.coords);
        // insert call to accuweather with coords.latitude,coords.longitude
    }

    const error = (error) => {
        console.error(error);
        // handle error using modal
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    return (
        <div id="home">
            <div id="search">
                <InputGroup id="search-group">
                    <InputGroup.Text>&#128269;</InputGroup.Text>
                    <FormControl
                        as="input"
                        id="search-input"
                        placeholder="search..."
                        aria-label="search"
                        aria-describedby="search"
                        />
                    <Button  id="search-button" size="lg" variant="outline-secondary">search</Button>
                </InputGroup>
                <Button id="current-position-button" onClick={() => getCurrentLocation()} size="lg" variant="info">Search&nbsp;Current&nbsp;Position</Button>
            </div>
            <div id="content">
                    <div id="top">
                        <div id="left">
                            <img id="left-img" src="" alt="" width="100" height="100" />
                            <div id="left-name">
                                <h2>Tel Aviv</h2>
                            <p>38<sup>o</sup>{degrees}</p>
                            </div>
                        </div>
                        <div id="right">
                            <img src="" alt="" width="50" height="50"/>
                        {/* <img src="" alt=""  width="50" height="50"/> */}
                            <Button>Add To Favorites</Button>
                        </div>
                    </div>
                <div id="bottom">
                    <h2 id="headline">scattered clouds</h2>
                    <div id="forecast">
                        <span className="forecast-day">
                            <h3>Sunday</h3>
                            <p>38<sup>o</sup>C</p>
                        </span>
                        <span className="forecast-day">
                            <h3>Monday</h3>
                            <p>38<sup>o</sup>C</p>
                        </span>
                        <span className="forecast-day">
                            <h3>Tuesday</h3>
                            <p>38<sup>o</sup>C</p>
                        </span>
                        <span className="forecast-day">
                            <h3>Wednesday</h3>
                            <p>38<sup>o</sup>C</p>
                        </span>
                        <span className="forecast-day">
                            <h3>Thursday</h3>
                            <p>38<sup>o</sup>C</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
