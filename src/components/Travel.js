import React from "react"

const Travel = ({destination, country, photo, distance}) => {
    return(
    <travel className="dd-travel">
        <ul>
            <li>{destination}</li>
            <li>{country}</li>
            <li>{distance}</li>
        <img
            src={photo}
            alt={destination}
        />
        </ul>
    </travel>
    )
}

export default Travel