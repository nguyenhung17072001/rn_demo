import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    addMainCityStart,
    addMainCitySuccess,
    addMainCityFail,


} from '../reducers/city';
import { searchCityByLocation } from '../util/services';


export function* addMainCity(action: any) {
    try {
        //debugger
        //console.log("action: ", action.payload)
        const res = yield call(searchCityByLocation, action.payload);
        yield put(addMainCitySuccess(res.data));
        
    } catch (error) {
        console.log("err while addMainCity: ", error);
        yield put(addMainCityFail(error))
        
    }
    
}


export function* watchCity() {
    // debugger
    yield takeEvery(addMainCityStart, addMainCity);
    
    
}