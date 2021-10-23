import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentConditions, getForecast } from '../../../forecast/accuweatherFunctions';
import "./favorites.css"
import Card from 'react-bootstrap/Card';
import { changeForecast, changeLocation, changeWeather } from '../../../state management/actions';
import { useHistory } from "react-router-dom";


function Favorites() {

    const history = useHistory();
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)

    const choosingFavorite = async (locationWeather) => {
        console.log(locationWeather);
        const weather = await getCurrentConditions(locationWeather.location.Key)
        const forecast = await getForecast(locationWeather.location.Key)
        dispatch(changeWeather(weather))
        dispatch(changeLocation(locationWeather.location))
        dispatch(changeForecast(forecast))
        history.push("/");
    }

    return (
        <div id="favorites">
            {favorites.length ? favorites.map(locationWeather => {
                return (
                    <Card
                        bg="Primary"
                        className="favorites"
                        key={locationWeather.weather.EpochTime}
                        onClick={() => choosingFavorite(locationWeather)}
                    >
                        <Card.Header><strong>{locationWeather.location.name}</strong></Card.Header>
                        <Card.Body>
                            <Card.Title><strong>{locationWeather.weather.WeatherText}</strong></Card.Title>
                            <Card.Title>
                                {locationWeather.weather.Temperature.Metric.Value}<sup>o</sup>{locationWeather.weather.Temperature.Metric.Unit}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                )
            })
                :
                <h1 id="no-favorites">No Favorites Selected</h1>
            }
        </div>
    )
}

export default Favorites
