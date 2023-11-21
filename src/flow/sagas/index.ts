import { all } from 'redux-saga/effects';
import { watchCity } from './city';

export default function* rootSaga() {
    try {
        yield all([
            watchCity(),
        ]);
    } catch (err) {
        console.log('err111111111: ', err);
    }
}
