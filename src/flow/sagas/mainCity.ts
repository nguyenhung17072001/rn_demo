import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
    addMainCityStart,
    addMainCitySuccess,
    addMainCityFail,


} from '../reducers/mainCity';

export function* addMainCity(action) {
    try {
        console.log("action: ", action.payload)
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