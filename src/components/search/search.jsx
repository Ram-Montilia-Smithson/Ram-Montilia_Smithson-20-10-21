import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal"
import "./search.css"
import { getAutoCompleteSearch, getCurrentConditions, getForecast, getGeoposition } from '../../weather/accuweatherFunctions';
import { changeForecast, changeLocation, changeSearch, changeSearchResponse, changeWeather } from '../../state-management/actions';
import { useDispatch, useSelector } from 'react-redux';

function Search({ searchRef }) {

    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const search = useSelector(state => state.search)
    const searchResponse = useSelector(state => state.searchResponse)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const success = async (position) => {
        
        const location = await getGeoposition(position.coords.latitude, position.coords.longitude)
        if (typeof location === "string") {
            handleShow()
            return
        }
        dispatch(changeLocation({ name: location.LocalizedName, Key: location.Key, img: "geoPosition" }))
        const weatherPromise = new Promise((resolve, reject) => {
            resolve(getCurrentConditions(location.Key))
        })
        const forecastPromise = new Promise((resolve, reject) => {
            resolve(getForecast(location.Key))
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

    }

    const error = () => {
        handleShow()
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    const autoComplete = async (searchText) => {
        dispatch(changeSearch(searchText))
        const autoCompleteSearchArray = await getAutoCompleteSearch(searchText);
        if (typeof autoCompleteSearchArray === "string") {
            handleShow()
            return
        }
        dispatch(changeSearchResponse(autoCompleteSearchArray))
    }

    const getWeather = async (location) => {
        dispatch(changeSearch(""))
        dispatch(changeLocation(location))
        const weatherPromise = new Promise((resolve, reject) => {
            resolve(getCurrentConditions(location.Key))
        })
        const forecastPromise = new Promise((resolve, reject) => {
            resolve(getForecast(location.Key))
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
    }

    return (
        <div >
            <div ref={searchRef} id="search">
                <InputGroup id="search-group">
                    <InputGroup.Text>&#128269;</InputGroup.Text>
                    <FormControl
                        as="input"
                        id="search-input"
                        placeholder="Enter Location"
                        aria-label="search"
                        aria-describedby="search"
                        onChange={(e) => autoComplete(e.target.value)}
                        value={search}
                    />
                </InputGroup>
                <Button
                    id="current-position-button"
                    onClick={() => getCurrentLocation()}
                    size="lg"
                    variant="secondary"
                >
                    Search&nbsp;Current&nbsp;Location
                </Button>
            </div>
            {search && <div id="dropdown">
                {searchResponse.map(location => {
                    return (
                        <span
                            key={location.Key}
                            className="dropdown-item"
                            onClick={() => getWeather(location)}
                        >
                            {location.name}
                        </span>
                    )
                })}
            </div>}

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
    )
}

export default Search
