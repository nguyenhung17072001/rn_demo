import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from 'redux';
import { purgeStoredState } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const sagaMiddleware = createSagaMiddleware();
const makeStore = (initialState: any) => {
    //const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const composeEnhancers = compose;
    const rootReducer = persistCombineReducers({
        key: 'root',
        storage: AsyncStorage,
        //whitelist: ["adminMessage", "adminUser"],
        
      }, (reducers));
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

   
    const persistor = persistStore(store)
    sagaMiddleware.run(rootSaga)
    return {store, persistor};
};

export default makeStore;