import './app.css';
import * as $ from 'jquery';
import * as HelloWorld from './HelloWorld'

console.log('Application bootstraping...');

$(() => {
    console.log('Application loading...');

    $('#get-started-button').on('click', () => {
        alert(HelloWorld.getMessage());
    })
});

console.log('Bootstrap finished.');