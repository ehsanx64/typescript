import { createStore, compose } from 'redux';

import { CounterReducer } from './Counter';

// Create store
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(CounterReducer, composeEnhancers());

store.subscribe(() => {
    console.log('Store\'s own subscriber...');
});

export const getStore = () => store;