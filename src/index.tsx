import './app.css';
import * as $ from 'jquery';
import * as HelloWorld from './HelloWorld'
import { createStore, compose } from 'redux';

import { getStore } from './redux/Store';
import { 
    increment, decrement,   // Action creators 
    selectCounterValue      // Selector
} from './redux/Counter';

console.log('Application bootstraping...');

$(() => {
    console.log('Application loaded...');

    $('#get-started-button').on('click', () => {
        alert(HelloWorld.getMessage());
    });
        
    // Get the store
    let store = getStore();

    // Subscribe to store changes
    store.subscribe(() => {
        const value = selectCounterValue(store.getState());
        console.log(`Current counter value: ${value}`);
    });

    // Dispatch some actions (by getting them from action creators)
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement());
    store.dispatch(decrement());
});

console.log('Bootstrap finished.');