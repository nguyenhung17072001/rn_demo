import { all } from 'redux-saga/effects';
import { watchMainCity } from './mainCity';

export default function* rootSaga() {
    try {
        yield all([
            watchMainCity(),
        ]);
    } catch (err) {
        console.log('err111111111: ', err);
    }
}