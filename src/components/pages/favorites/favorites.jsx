import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentConditions, getForecast } from '../../../weather/accuweatherFunctions';
import "./favorites.css"
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { changeForecast, changeLocation, changeWeather } from '../../../state-management/actions';
import { useHistory } from "react-router-dom";


function Favorites({ home, searchRef, contentRef, app }) {

    const [show, setShow] = useState(false);

    const history = useHistory();

    const dispatch = useDispatch()

    const favorites = useSelector(state => state.favorites)

    useEffect(() => {
        if (app.current.classList[1]) {
            home.current.classList.toggle("lightMode");
            searchRef.current.classList.toggle("lightMode");
            contentRef.current.classList.toggle("contentMode");
        }
    }, [app, home, searchRef, contentRef])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const choosingFavorite = async (locationWeather) => {
        dispatch(changeLocation(locationWeather.location))
        const weatherPromise = new Promise((resolve, reject) => {
            resolve(getCurrentConditions(locationWeather.location.Key))
        })
        const forecastPromise = new Promise((resolve, reject) => {
            resolve(getForecast(locationWeather.location.Key))
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
        history.push("/");
    }

    return (
        <div ref={home}>
            <div ref={searchRef}>
                <div ref={contentRef} id="favorites">
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

                </div>
            </div>
        </div>
    )
}

export default Favorites
