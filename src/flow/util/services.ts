import axios from "axios";
import { URL } from './url';

const CITY_URL = 'https://nominatim.openstreetmap.org';

export async function searchCityByName(data: any){
    let params = {
        format: 'json',
        q: data && data.q ? data.q : '',
    }
    return axios.get(CITY_URL + '/search', { params });
} 