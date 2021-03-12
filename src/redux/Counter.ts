import ReduxAction from './ReduxAction';

export const INCREMENT : string = 'INCREMENT';
export const DECREMENT : string = 'DECREMENT';

export const CounterReducer = (state = 0, action: ReduxAction) => {
    switch (action.type) {
    case INCREMENT:
        return state + 1
    case DECREMENT:
        return state - 1
    default:
        return state
    }
}

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const selectCounterValue = (state : number) => state;