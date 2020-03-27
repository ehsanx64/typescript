import './app.css';
import * as $ from 'jquery';
import * as HelloWorld from './HelloWorld'
import { createStore } from 'redux'

console.log('Application bootstraping...');

$(() => {
    console.log('Application loading...');

    $('#get-started-button').on('click', () => {
        alert(HelloWorld.getMessage());
    })

    interface ReduxAction {
        type: string,
        payload: object
    }

    function counter(state = 0, action: ReduxAction) {
        switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
        }
    }

    let store = createStore(counter)
    store.subscribe(() => console.log(store.getState()))
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'DECREMENT'})
    store.dispatch({type: 'DECREMENT'})
});

console.log('Bootstrap finished.');