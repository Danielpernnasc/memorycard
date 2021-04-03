import {
    LOCK, 
    OPENCARD, 
    SETMATCH, 
    CLOSECARDS, 
    CLOSEVICTORYDIALOG, 
    STARTGAME
} from './actions';
import ListBuilder from '../Builders/ListBuilder';

const initialState = {
    isLocked: false,
    isVictoryDialogOpen: false,
    cards: new ListBuilder()
    .createList(3)
    .shuffle()
    .build()
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case STARTGAME:
        return {
           ...state,
           isVictoryDialogOpen: false,
           cards: new ListBuilder()
           .createList(3)
           .shuffle()
           .build()
        };
        case CLOSEVICTORYDIALOG:
        return {
            ...state,
            isVictoryDialogOpen: false
        };
        case LOCK: 
            return {
            ...state,
            isLocked: true
        }
        case OPENCARD: {
            const cards = state.cards.slice();

            cards[action.index].isActive = true;

            return {
                ...state,
                cards
            };
        }
        case SETMATCH: {
            const cards = state.cards.slice();
            let isVictoryDialogOpen = false;

            cards[action.index1].hasMatch = true;
            cards[action.index2].hasMatch = true;

            if (cards.every(c => c.hasMatch)) {
                isVictoryDialogOpen = true;
            }

            return {
                ...state,
                isVictoryDialogOpen,
                cards
            };
        }

        case CLOSECARDS: {
            const cards = state.cards.slice();

            cards[action.index1].isActive = false;
            cards[action.index2].isActive = false;

            return {
                ...state,
                isLocked: false,
                cards
            };
        }
        default:
            return state;
    }
};

export default gameReducer;