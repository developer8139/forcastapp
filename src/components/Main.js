import { Forecast } from "./Forecast"
import axios from 'axios';
import {useEffect, useState} from 'react';

export const Main = () => {
    const [forecastDay, setForecastDay] = useState(null);
    const [locationDay, setLocationDay] = useState(null);

    useEffect(function() {
        const getForecast = async () => {
            try {
                let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key= b71ab90548e74bc4bf003617210708&q=06385`);
                let data = await response.data;
                let {forecast, location} = data;
                setForecastDay(forecast);
                setLocationDay(location);
                
            } catch(e) {
                console.log(e)
            }
        }

        getForecast();
        
    }, [])

    return (
        <div>
            <h1>The Forcast App</h1>
            <Forecast forecast={forecastDay} location={locationDay}/>
        </div>
    )
}


