import { createStore, applyMiddleware }  from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";

import gameReducer from "./reducer";
import gameSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
    gameReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(gameSaga);

export default store;