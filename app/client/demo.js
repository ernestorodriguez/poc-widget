import '../pages/demo/styles.scss';
import render from  '../pages/demo/controller';
import ReactDOM from 'react-dom'
import {TweenLite, ScrollToPlugin } from 'gsap/all';

const plugins = [ScrollToPlugin];
const { model } = window.__PRELOADED_STATE__;




document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.hydrate(
        render(model),
        document.getElementById('root-app'),
    );
});