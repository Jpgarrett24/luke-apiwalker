import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, Redirect } from '@reach/router';

const Data = (props) => {

    const { resource, id } = props;
    const { data, setData } = props;
    const [homeworld, setHomeworld] = useState(false)
    const [errors, setErrors] = useState(0)

    const getHomeworld = (incoming) => {
        axios.get(`${incoming.homeworld}`)
            .then((response) => { setHomeworld(response.data); })
            .catch((error) => { console.log('not a successful api'); })
    }

    const displayHomeworld = () => {
        if (homeworld == false) {
            return (
                "travelling at light speed"
            )
        }
        else {
            return (homeworld.name);
        }
    }

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response) => { setData(response.data); getHomeworld(response.data); setErrors(0) })
            .catch((error) => { if (error) { setErrors(1); } })
    }, [resource, id]);

    const water = (water) => {
        if (water > 0) {
            return "True"
        }
        else {
            return "False"
        }
    }

    console.log(homeworld);

    if (errors == 1) {
        return (
            <>
                <h1 style={{ color: "red" }}>These aren't the droids you're looking for</h1>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768" alt="Ben Kenobi gazing into the distance" />
            </>
        )
    }

    if (resource === 'people') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Height:</strong> {data.height} cm</p>
                <p><strong>Mass:</strong> {data.mass}</p>
                <p><strong>Homeworld:</strong> {<Link to="/planets/3">{displayHomeworld()}</Link>} </p>
                <p><strong>Birth Year:</strong> {data.birth_year}</p>
            </>
        )
    }

    else if (resource === 'planets') {
        return (
            <>
                <h1>{data.name}</h1>
                <p><strong>Terrain:</strong> {data.terrain}</p>
                <p><strong>Climate:</strong> {data.climate}</p>
                <p><strong>Population:</strong> {data.population}</p>
                <p><strong>Surface Water:</strong> {water(data.surface_water)}</p>
                <p><strong>Gravity:</strong> {data.gravity}</p>
            </>
        )
    }
}

export default Data;