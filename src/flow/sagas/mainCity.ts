import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    addMainCityStart,
    addMainCitySuccess,
    addMainCityFail,


} from '../reducers/mainCity';
import { searchCityByLocation } from '../util/services';


export function* addMainCity(action: any) {
    try {
        console.log("action: ", action.payload)
        const res = yield call(searchCityByLocation, action.payload);
        console.log("res: ", res.data)
        //yield put(fetchImageDataSuccess(imagePaths))
        
    } catch (error) {
        console.log("err while addMainCity: ", error);
        yield put(addMainCityFail(error))
        
    }
    
}


export function* watchMainCity() {
    // debugger
    yield takeEvery(addMainCityStart, addMainCity);
    
    
}