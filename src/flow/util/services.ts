//import axios from "axios";
import http from './http';
import axios from 'axios';
import { URL } from './url';



const CITY_URL = 'https://nominatim.openstreetmap.org';
const OPEN_WEATHER_API_KEY =  '289734bb17b11a3d48ae4fe8fea91337';


export async function searchCityByName(data: {}){
    let params = {
        format: 'json',
        q: data && data.q ? data.q : '',
    }
    return http.get(CITY_URL + '/search', { params });
};

export async function searchCityByLocation(data: {}){
    let params = {
        format: 'json',
        lat: data && data.lat ? data.lat : 0,
        lon: data && data.lon ? data.lon : 0,
    }
    return http.get(CITY_URL + '/reverse', { params });
};

export async function fetchWeatherByLocation(data: {}){
    let params = {
        appid: OPEN_WEATHER_API_KEY,
        lang: 'vi',
        lat: data && data.lat ? data.lat : 0,
        lon: data && data.lon ? data.lon : 0,
    }
    return http.get(URL.fetchWeatherByLocation, { params });
};

