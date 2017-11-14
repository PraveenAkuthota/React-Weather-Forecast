import axios from 'axios';

const API_KEY = '321a987ade93c07d34c258dc3fccfac6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;    //'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ){ 
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return{
        type : FETCH_WEATHER,
        payload : request
    };
}