import { put, select, delay, takeEvery } from "redux-saga/effects";

import {SELECTCARD, LOCK, OPENCARD, SETMATCH, CLOSECARDS} from './actions';

function* selectCard(action) {
    const { key } = action;
    const cards = yield select(state => state.cards);
    const isLocked = yield select( state => state.isLocked);
    const index = cards.findIndex(c => c.key === key);
    const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch);

    if(!isLocked && index > -1 && !cards[index].isActive) {
        yield put({ type: OPENCARD, index});

        if (otherCardIndex > -1) {
            if (cards[index].id === cards[otherCardIndex].id) {
                yield put({ type: SETMATCH, index1: index, index2: otherCardIndex });
            }   else {
                yield put({ type: LOCK});
                yield delay(1500);
                yield put({type: CLOSECARDS, index1: index, index2: otherCardIndex });
            }
        }
    }
}

function* gameSaga() {
    yield takeEvery(SELECTCARD, selectCard);
}

export default gameSaga;