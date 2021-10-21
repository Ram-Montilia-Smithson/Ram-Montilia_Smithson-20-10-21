import React from 'react'
import "./favorites.css"

function Favorites() {
    return (
        <div id="favorites">
            <div className="favorites" id="">
                <h3>Tel Aviv</h3>
                <p>38<sup>o</sup>C</p>
                <h2>scattered clouds</h2>
            </div>
            <div className="favorites" id="">
                <h3>Jerusalem</h3>
                <p>38<sup>o</sup>C</p>
                <h2>scattered clouds</h2>
            </div>
            <div className="favorites" id="">
                <h3>Eilat</h3>
                <p>38<sup>o</sup>C</p>
                <h2>scattered clouds</h2>
            </div>
            <div className="favorites" id="">
                <h3>Madrid</h3>
                <p>38<sup>o</sup>C</p>
                <h2>scattered clouds</h2>
            </div>
            <div className="favorites" id="">
                <h3>Las Vegas</h3>
                <p>38<sup>o</sup>C</p>
                <h2>scattered clouds</h2>
            </div>
        </div>
    )
}

export default Favorites
