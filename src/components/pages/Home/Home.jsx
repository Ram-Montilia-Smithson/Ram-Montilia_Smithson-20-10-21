import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
// import {heart} from ""
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../search/search';
import { changeFavorites } from '../../../state management/actions';

function Home() {

    const dispatch = useDispatch()

    // const degrees = useSelector(state => state.degrees)
    const weather = useSelector(state => state.weather)
    const forecast = useSelector(state => state.forecast)
    const location = useSelector(state => state.location)
    // const favorites = useSelector(state => state.favorites)

    const addToFavorites = () => {
        const favorite = location.key
        dispatch(changeFavorites(favorite))
    }

    return (
        <div id="home">
            <Search/>
            <div id="content">
                    <div id="top">
                        <div id="left">
                            <img id="left-img" src="" alt="" width="100" height="100" />
                            <div id="left-name">
                            <h2>{location.name}</h2>
                            {Object.keys(weather).length > 0 && <h3>{weather.Temperature.Metric.Value}<sup>o</sup>{weather.Temperature.Metric.Unit}</h3>}
                            </div>
                        </div>
                        <div id="right">
                            <img src="" alt="" width="50" height="50"/>
                        {/* <img src="" alt=""  width="50" height="50"/> */}
                        {<Button onClick={() => addToFavorites()}>Add To Favorites</Button>}
                        </div>
                    </div>
                <div id="bottom">
                    <h2 id="headline">{weather.WeatherText ? weather.WeatherText : ""}</h2>
                    {Object.keys(forecast).length > 0 &&
                        <div id="forecast">
                        {forecast.DailyForecasts.map(day => {
                            return (
                                <span key={day.EpochDate} className="forecast-day">
                                    <h3>{new Date(day.EpochDate * 1000).toLocaleDateString()}</h3>
                                    <strong>Day:</strong><span>{day.Day.IconPhrase}</span><br/>
                                    <strong>Night:</strong><span>{day.Night.IconPhrase}</span><br/>
                                    <strong>Minimum: </strong><span>{day.Temperature.Minimum.Value}<sup>o</sup>{day.Temperature.Minimum.Unit}</span><br/>
                                    <strong>Maximum: </strong><span>{day.Temperature.Maximum.Value}<sup>o</sup>{day.Temperature.Maximum.Unit}</span>
                                </span>
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
