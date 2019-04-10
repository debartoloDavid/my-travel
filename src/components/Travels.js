import React from "react"

const travels = [
    {
        destination:"Paris",
        country:"France",
        photo:"https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"0 KM"
    },
    {
        destination:"New York",
        country:"USA",
        photo:"https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"9000 KM"
    },
    {
        destination:"Tokio",
        country:"Japon",
        photo:"https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"750 KM"
    },
    {
        destination:"Bali",
        country:"Indonesie",
        photo:"https://images.pexels.com/photos/1081915/pexels-photo-1081915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"12215 KM"
    },
    {
        destination:"Rome",
        country:"Italie",
        photo:"https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"650 KM"
    },
    {
        destination:"Toronto",
        country:"Canada",
        photo:"https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"10000 KM"
    },
    {
        destination:"Lisbon",
        country:"Portugal",
        photo:"https://images.pexels.com/photos/532931/pexels-photo-532931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"1050 KM"
    },
    {
        destination:"Barcelone",
        country:"Espagne",
        photo:"https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"750 KM"
    },
    {
        destination:"Amsterdam",
        country:"Pays-Bas",
        photo:"https://images.pexels.com/photos/1329510/pexels-photo-1329510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"550 KM"
    },
    {
        destination:"Sydney",
        country:"Astralie",
        photo:"https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        distance:"13500KM"
    }
];

const Travels = () => {
    return (
        <div>
            {travels.map(travel =>
            <travel>
            <ul>
                <li>{travel.destination}</li>
                <li>{travel.country}</li>
                <li>{travel.distance}</li>
            <img
                src={travel.photo}
                alt={travel.destination}
            />
            </ul>
            </travel>
            )}
        </div>
    )
}


export default Travels