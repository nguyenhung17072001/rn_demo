import axios from "axios";
import { URL } from './url';



const CITY_URL = 'https://nominatim.openstreetmap.org';
const OPEN_WEATHER_API_KEY =  '289734bb17b11a3d48ae4fe8fea91337';


export async function searchCityByName(data: any){
    let params = {
        format: 'json',
        q: data && data.q ? data.q : '',
    }
    return axios.get(CITY_URL + '/search', { params });
};

