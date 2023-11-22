import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    addMainCityStart,
    addMainCitySuccess,
    addMainCityFail,

    addCityStart,
    addCitySuccess,
    addCityFail

} from '../reducers/city';
import { searchCityByLocation, fetchWeatherByLocation } from '../util/services';


export function* addMainCity(action: any) {
    try {
        //debugger
        //console.log("action: ", action.payload)
        const res = yield call(searchCityByLocation, action.payload);
        const weather = yield call(fetchWeatherByLocation, action.payload);
        //console.log(weather.data)
        yield put(addMainCitySuccess({
            ...res.data, 
            main: weather?.data.main,
            wind: weather?.data.wind,
            clouds: weather?.data.clouds,
            weather: weather?.data.weather,

        }));
        
    } catch (error) {
        console.log("err while addMainCity: ", error);
        yield put(addMainCityFail(error))
        
    }
    
}

export function* addCity(action: any) {
    try {
        //debugger
        //console.log("action: ", action.payload)
        const weather = yield call(fetchWeatherByLocation, action.payload );
        //console.log("weather: ", weather)
        yield put(addCitySuccess({
            ...action.payload, 
            //main: weather?.data.main,
            //wind: weather?.data.wind,
            //clouds: weather?.data.clouds,
            //weather: weather?.data.weather,

        }));
        
    } catch (error) {
        console.log("err while addCity: ", error);
        yield put(addCityFail(error))
        
    }
    
}


export function* watchCity() {
    // debugger
    yield takeEvery(addMainCityStart, addMainCity);
    yield takeEvery(addCityStart, addCity);
    
    
}