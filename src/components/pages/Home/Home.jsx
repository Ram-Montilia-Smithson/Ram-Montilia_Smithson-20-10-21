import React, { useEffect, useRef } from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import heart from "../../../icons/heart.png"
import emptyHeart from "../../../icons/empty-heart.png"
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../search/search';
import { changeFavorites } from '../../../state management/actions';

function Home({ home, searchRef, contentRef, app }) {

    const dispatch = useDispatch()

    const weather = useSelector(state => state.weather)
    const forecast = useSelector(state => state.forecast)
    const location = useSelector(state => state.location)
    const favorites = useSelector(state => state.favorites)

    const favoritesButton = useRef(true)

    useEffect(() => {
        if (app.current.classList[1]) {
            home.current.classList.toggle("lightMode");
            searchRef.current.classList.toggle("lightMode");
            contentRef.current.classList.toggle("contentMode");
        }
    }, [app, home, searchRef, contentRef])

    console.log(favorites, location);
    favorites.every((city, index) => {
        if (city.location.name === location.name) {
            console.log("found");
            favoritesButton.current = false
            console.log(favoritesButton.current);
            return false
        }
        if (index + 1 === favorites.length) {
            console.log("not found");
            favoritesButton.current = true
            console.log(favoritesButton.current);
            return false
        }
        else {return true}
    });

    const addToFavorites = () => {
        console.log(favorites);
        if (!favorites.length) {
            console.log("empty - adding");
            favoritesButton.current = false
            dispatch(changeFavorites({ location, weather }))
            return
        }
        favorites.forEach((city, index) => {
            if (city.location.name === location.name) {
                console.log("found - deleting");
                favoritesButton.current = true
                dispatch(changeFavorites({ location, weather }))
                return
            }
            if (index + 1 === favorites.length) {
                console.log("not found - adding");
                favoritesButton.current = false
                dispatch(changeFavorites({ location, weather }))
                return
            }
        });
    }

    return (
        <div id="home" ref={home}>
            <Search searchRef={searchRef} />
            <div ref={contentRef} id="content">
                <div id="top">
                    <div id="left">
                        <img id="left-img" src="" alt="" width="100" height="100" />
                        <div id="left-name">
                            <h2>{location.name}</h2>
                            {Object.keys(weather).length > 0 && <h3>{weather.Temperature.Metric.Value}<sup>o</sup>{weather.Temperature.Metric.Unit}</h3>}
                        </div>
                    </div>
                    <h2 id="headline">{weather.WeatherText}</h2>
                    <div id="right">
                        {favoritesButton.current ?
                            <>
                                <img src={emptyHeart} alt="add to favorites" width="50" height="50" />
                                {<Button variant="secondary" disabled={Object.keys(location).length === 0} onClick={() => addToFavorites()}>Add To Favorites</Button>}
                            </>
                            :
                            <>
                                <img src={heart} alt="remove from favorites" width="50" height="50" />
                                <Button variant="secondary" disabled={Object.keys(location).length === 0} onClick={() => addToFavorites()}>Remove From Favorites</Button>
                            </>
                        }
                    </div>
                </div>
                <div id="bottom">
                    {Object.keys(forecast).length > 0 &&
                        <div id="forecast">
                            {forecast.DailyForecasts.map(day => {
                                return (
                                    <Card key={day.EpochDate} className="forecast-day px-2 py-2">
                                        <Card.Header className="my-0 h4">{new Date(day.EpochDate * 1000).toLocaleDateString()}</Card.Header>
                                        <Card.Header>
                                            <strong>Day: </strong><span>{day.Day.IconPhrase}</span><br />
                                            <strong>Night: </strong><span>{day.Night.IconPhrase}</span>
                                        </Card.Header>
                                        <Card.Footer>
                                            <span><strong>Minimum: </strong>{day.Temperature.Minimum.Value}<sup>o</sup>{day.Temperature.Minimum.Unit}</span><br />
                                            <span><strong>Maximum: </strong>{day.Temperature.Maximum.Value}<sup>o</sup>{day.Temperature.Maximum.Unit}</span>
                                        </Card.Footer>
                                    </Card>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
