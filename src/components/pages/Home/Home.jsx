import React from 'react'
import "./Home.css"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';


function Home() {
    return (
        <div id="home">
            <InputGroup id="search-group">
                <FormControl
                    id="search-input"
                    placeholder="&#128269;search..."
                    aria-label="search"
                    aria-describedby="search"
                    
                />
                <Button id="search-button">search</Button>
            </InputGroup>
            <div id="content">
                <div id="today">
                    <div id="top">
                        <span id="left">Tel Aviv</span>
                        <Button id="right">Add To Favorites</Button>
                    </div>
                    <div id="bottom">scattered clouds</div>
                </div>
                <div id="forecast">
                    <span className="forecast-day">day +1</span>
                    <span className="forecast-day">day +2</span>
                    <span className="forecast-day">day +3</span>
                    <span className="forecast-day">day +4</span>
                    <span className="forecast-day">day +5</span>
                </div>
            </div>
        </div>
    )
}

export default Home
