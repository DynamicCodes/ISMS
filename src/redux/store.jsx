// import {createStore} from 'redux'

import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import itemSaga from './itemSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer:rootReducer,
        middleware: ()=> [sagaMiddleware]
    }
    );

sagaMiddleware.run(itemSaga);
export default store;